// let age : number = 32;


interface User {
    id : number;
    name : string;
    email : string;
    isActive : boolean;
}

const myUser : User = {
    id :1003,
    name :'maaz',
    email : 'khi@.com',
    isActive : true,
};



 function createUser (myUser : User) : User {
     return myUser;    
}

console.log(myUser)




class Vehicle {
    make : string;
    model : string;
    year : number;

constructor (make : string ,model : string , year : number) {
    this.make = make;
    this.model = model;
    this.year = year
}

    getinfo(): string {
        return `${this.make} ${this.model} ${this.year}`
    }

}


class Car extends Vehicle {
    
door : number;

constructor (make : string , model : string , year : number , door : number) {
    super(make , model , year);
    this.door = door;
}

    getinfo(): string {
        return `${super.getinfo () }${this.door}`
}}

class Motercyle extends Vehicle {
    hasSidecar : boolean;

    constructor(make : string , model : string , year : number , hasSidecar : boolean ) {
        super(make , model , year ) 
        this.hasSidecar = hasSidecar;
    }

    getinfo(): string {
        
        return `${super.getinfo()} ${this.hasSidecar}`
    }

}

const Mycar = new Car ('Toyota', 'Corolla' , 2024 , 4);

const Mymotercyle = new Motercyle ('Honda', 'seventy', 2025 , false)

console.log(Mycar)
console.log(Mymotercyle)

console.log(Mycar.getinfo());