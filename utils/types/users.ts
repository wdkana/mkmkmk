export interface Anonymous {
    role: string;
}

export interface Member {
    role: string
    username?: string
    public_key?: string
    private_key?: string
}