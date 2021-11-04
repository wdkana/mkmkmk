export interface User_project_create {
    public_key: string,
    title?: string,
    description?: string,
    link?: string,
    folder_id?: string,
    status?: string
}

export interface User_project_update {
    public_key: string,
    title?: string,
    description?: string,
    link?: string,
    folder_id?: string,
    status?: string
    _id?: string
}