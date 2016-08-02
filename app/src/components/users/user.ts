export class Address {
    name:string;
    suite:string;
    city:string;
    zipcode:string;
}

export class User {
    id: number;
    name:string;
    phone:string;
    email:string;
    address = new Address();
}