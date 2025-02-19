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



