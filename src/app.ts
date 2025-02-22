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


class BankAccount  {
    private balance : number;
    private readonly AccNumber : string;

    constructor (initianlBalance : number , accountNumber : string ) {
        this.balance = initianlBalance;
        this.AccNumber = accountNumber;
    }

    getaccountNumber (): string {
        return this.AccNumber
    }

    getOpeningBalance () : number {
        return this.balance

    }

    deposit (amount : number) :void {
               this.balance += amount;
              }

              getBalance () : number {
                return this.balance
              }

              withdraw (amount : number) : void {
                this.balance -= amount
              }

              }

              const myAccount = new BankAccount (1000 , '112233') ;
             
              console.log( "Account number" , myAccount.getaccountNumber());

              console.log( "Openining Balance" , myAccount.getOpeningBalance());

              myAccount.deposit(500);
              console.log( "Current Balance" , myAccount.getBalance());

              myAccount.withdraw(200);

              console.log( "Net Total" , myAccount.getBalance());


              


interface Product {
    id : number;
    name : string;
    price : number;
    category : string; }


function Createproduct (Product : Product) :Product {
    return Product;
}
 const newProduct : Product = {
    id : 111,
    name : 'laptop',
    price : 2000,
    category : 'Electronic',
 }

 console.log(newProduct);

 const newObject = Createproduct (newProduct);

 console.log(newObject);



class Employee  {
    name : string;
    salary : number;
    
    constructor(name : string,salary : number) {
        this.name = name;
        this.salary = salary;
    }

    getDetails () :string {
        return `${this.name} ${this.salary}`
    }
}

class Developer extends Employee {
    pLanguage : string;

    constructor(name : string , salary : number , pLanguage : string) {
        super(name,salary)
        this.pLanguage =pLanguage
    }

    getDetails(): string {
        return `Developer : ${this.name} ${this.salary} ${this.pLanguage}`
    }

}

class Designer extends Employee {

    toolUsed : string;

    constructor (name :string , salary : number , toolUsed : string ) {
        super(name , salary)
        this.toolUsed = toolUsed;
    }
    getDetails(): string {
        return `Designer ${this.name} ${this.salary} ${this.toolUsed}`
    }
}

const employee1 = new Developer ('Maaz' , 10000 ,'Java script')
const employee2 = new Designer ('Ali' , 10000 ,'Adobe')

console.log(employee1.getDetails());
console.log(employee2.getDetails());



interface newCar {
    drive () :string
}

interface newBike {
    ride () : string
}

function useVehicle (Vehicle : newCar | newBike ) : void {
    if('drive' in Vehicle ) {
        console.log(Vehicle.drive())
    } else {
        console.log(Vehicle.ride())
    }}

    const Cars : newCar ={
        drive : function () {
            return  'Driving a Car';
        }
    };


const myBikes : newBike = {
    ride : function () {
        return 'Riding a bike';
    }
}

useVehicle(Cars);
useVehicle(myBikes)

