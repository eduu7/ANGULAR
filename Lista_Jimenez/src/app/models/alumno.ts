import { subject } from "./subject";

export class alumno{
    control_number: string;
    name:string;
    last_name:string;
    address:string;
    birthdate:Date;
    age:number;
    image_path:string;
    subjects:Array<subject>;
    isEnabled:boolean;

    constructor(control_number:string, name:string, last_name:string, address:string, birthdate:Date, age:number,
        image_path:string, subjects:Array<subject>, isEnabled:boolean) {
        this.control_number=control_number;
        this.name=name;
        this.last_name=last_name;
        this.address=address;
        this.age=age;
        this.birthdate=birthdate;
        this.image_path=image_path;
        this.subjects= subjects;        
        this.isEnabled=isEnabled
    }

}