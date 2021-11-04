export default class User_projects {
    public public_key: string
    public title?: string
    public description?: string
    public link?: string
    public folder_id?: string
    public status?: string
    public _id?: string

    constructor (
        public_key: string, 
        title?: string,
        description?: string,
        link?: string,
        folder_id?: string,
        status?: string,
        _id?: string
    ){
        this.public_key = public_key;
        this.title = title;
        this.description = description;
        this.link = link;
        this.folder_id = folder_id;
        this.status = status;
        this._id = _id;
    }
}