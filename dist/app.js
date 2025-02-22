"use strict";
// let age : number = 32;
const myUser = {
    id: 1003,
    name: 'maaz',
    email: 'khi@.com',
    isActive: true,
};
function createUser(myUser) {
    return myUser;
}
console.log(myUser);
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getinfo() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, door) {
        super(make, model, year);
        this.door = door;
    }
    getinfo() {
        return `${super.getinfo()}${this.door}`;
    }
}
class Motercyle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getinfo() {
        return `${super.getinfo()} ${this.hasSidecar}`;
    }
}
const Mycar = new Car('Toyota', 'Corolla', 2024, 4);
const Mymotercyle = new Motercyle('Honda', 'seventy', 2025, false);
console.log(Mycar);
console.log(Mymotercyle);
console.log(Mycar.getinfo());
class BankAccount {
    constructor(initianlBalance, accountNumber) {
        this.balance = initianlBalance;
        this.AccNumber = accountNumber;
    }
    getaccountNumber() {
        return this.AccNumber;
    }
    getOpeningBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
const myAccount = new BankAccount(1000, '112233');
console.log("Account number", myAccount.getaccountNumber());
console.log("Openining Balance", myAccount.getOpeningBalance());
myAccount.deposit(500);
console.log("Current Balance", myAccount.getBalance());
myAccount.withdraw(200);
console.log("Net Total", myAccount.getBalance());
function Createproduct(Product) {
    return Product;
}
const newProduct = {
    id: 111,
    name: 'laptop',
    price: 2000,
    category: 'Electronic',
};
console.log(newProduct);
const newObject = Createproduct(newProduct);
console.log(newObject);
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, pLanguage) {
        super(name, salary);
        this.pLanguage = pLanguage;
    }
    getDetails() {
        return `Developer : ${this.name} ${this.salary} ${this.pLanguage}`;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `Designer ${this.name} ${this.salary} ${this.toolUsed}`;
    }
}
const employee1 = new Developer('Maaz', 10000, 'Java script');
const employee2 = new Designer('Ali', 10000, 'Adobe');
console.log(employee1.getDetails());
console.log(employee2.getDetails());
function useVehicle(Vehicle) {
    if ('drive' in Vehicle) {
        console.log(Vehicle.drive());
    }
    else {
        console.log(Vehicle.ride());
    }
}
const Cars = {
    drive: function () {
        return 'Driving a Car';
    }
};
const myBikes = {
    ride: function () {
        return 'Riding a bike';
    }
};
useVehicle(Cars);
useVehicle(myBikes);
//# sourceMappingURL=app.js.map