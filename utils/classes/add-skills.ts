export default class Addskills {
    public skill_id?: number 
    public title?: string
    public description?: string 
    public difficult?: string 

    constructor(skill_id?: number, title?: string, description?: string, difficult?:string ) {
        this.skill_id = skill_id;
        this.title = title;
        this.description = description;
        this.difficult = difficult;
    }
}