export class Agency{
    _id?: string;
    name: string;
    address: string;
    creationDate?: Date;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
    
}