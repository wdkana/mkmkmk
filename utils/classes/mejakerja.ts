import * as crypto from "crypto";

export class MejaKerja {
    constructor(
        public ipAddress: string,
        public publicKey: string,
    ) {

    }
    toString() {
        return JSON.stringify(this);
    }
}

export class Block {

    public nonce = Math.round(Math.random() * 999999999);

    constructor(
        public prevHash: string,
        public MejaKerja: MejaKerja,
        public time = Date.now()
    ) { }

    get hash() {
        const str = JSON.stringify(this);
        const hash = crypto.createHash('SHA256');
        hash.update(str).end();
        return hash.digest('hex');
    }
}


export class Chain {
    // Singleton instance
    public static instance = new Chain();

    chain: Block[];

    constructor() {
        this.chain = [
            // Genesis block
            new Block('', new MejaKerja(100, 'genesis', 'satoshi'))
        ];
    }

    // Most recent block
    get lastBlock() {
        return this.chain[this.chain.length - 1];
    }

    // Proof of work system
    mine(nonce: number) {
        let solution = 1;
        console.log('⛏️  registering...')

        while (true) {

            const hash = crypto.createHash('MD5');
            hash.update((nonce + solution).toString()).end();

            const attempt = hash.digest('hex');

            if (attempt.substr(0, 4) === '0000') {
                console.log(`got it: ${solution}`);
                return solution;
            }

            solution += 1;
        }
    }

    // Add a new block to the chain if valid signature & proof of work is complete
    addBlock(MejaKerja: MejaKerja, senderPublicKey: string, signature: Buffer) {
        const verify = crypto.createVerify('SHA256');
        verify.update(MejaKerja.toString());

        const isValid = verify.verify(senderPublicKey, signature);

        if (isValid) {
            const newBlock = new Block(this.lastBlock.hash, MejaKerja);
            this.mine(newBlock.nonce);
            this.chain.push(newBlock);
        }
    }

}

export default class Registration {
    public publicKey: string
    public privateKey: string

    constructor() {
        const keypair = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
        })
        this.publicKey = keypair.publicKey
        this.privateKey = keypair.privateKey
    }

    enterSystem(ipAddress: string, pubKey: string) {
        const registration = new MejaKerja(ipAddress, pubKey)
        const sign = crypto.createSign('SHA256')
        sign.update(registration.toString()).end()

        const signature = sign.sign(this.privateKey)
        Chain.instance.addBlock(registration, this.publicKey, signature);
    }

}