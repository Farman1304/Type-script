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
//# sourceMappingURL=app.js.map