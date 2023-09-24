export class TaskViewModel
{
    public taskId : number;
    public title : string;
    public description : string;
    public createdAt : Date;
    public status : string;
    public targetDate : Date;

    constructor() 
    {
        this.createdAt = new Date();
    }
}
