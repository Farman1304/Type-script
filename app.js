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
//# sourceMappingURL=app.js.map