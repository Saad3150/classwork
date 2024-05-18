"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = function (client) {
    return "my id is ".concat(client.id);
};
var client = {
    name: "Saad",
    id: 1234,
    age: 28,
    e_mail: "saadmunawar315@gmail.com",
};
console.log(Person(client));
