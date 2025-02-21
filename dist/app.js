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
//# sourceMappingURL=app.js.map