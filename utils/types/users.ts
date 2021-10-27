export interface Anonymous {
    ip: string;
    role: string;
}

export interface Member {
    ip: string
    role: string
    username?: string
    public_key?: string
    private_key?: string
}