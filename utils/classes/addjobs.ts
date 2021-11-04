export default class Addjobs {
    public public_key?: string 
    public title?: string
    public skills?: number 
    public skill_id?: number 

    constructor(public_key?: string, title?: string, skills?: number, skill_id?:number ) {
        this.public_key = public_key;
        this.title = title;
        this.skills = skills;
        this.skill_id = skill_id;
    }
}