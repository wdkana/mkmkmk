export default class User_follows {
    public public_key: string
    public public_key_target: string

    constructor (
        public_key: string,
        public_key_target: string,
    ) {
        this.public_key = public_key
        this.public_key_target = public_key_target
    }
}