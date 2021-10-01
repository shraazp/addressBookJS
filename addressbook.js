const prompt = require("prompt-sync")();
const firstName = prompt("Enter the first name: ");
const lastName = prompt("Enter the last name: ");
const address = prompt("Enter the Address: ");
const city = prompt("Enter the city: ");
const state = prompt("Enter the State: ");
const zip = prompt("Enter the ZIP: ");
const phone = prompt("Enter the Phone number: ");
const email = prompt("Enter the email id: ");
//array to store the contacts which are json objects
let addressBook=[
    {
        "firstName":firstName,
        "lastName":lastName,
        "address":address,
        "city":city,
        "state":state,
        "zip":zip,
        "phone":phone,
        "email":email,
    }
]
console.log(addressBook)