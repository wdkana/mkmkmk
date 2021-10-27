export default class Users {
    public ip: string
    public role: string
    public username?: string 
    public public_key?: string 
    public private_key?: string

    constructor(ip: string,  role: string, username?: string, public_key?: string, private_key?: string) {
        this.ip = ip;
        this.role = role;
        this.username = username;
        this.public_key = public_key;
        this.private_key = private_key;
    }
}