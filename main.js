let firstName = "Fawaz"; // string
let age = 2.5; // number
let isOnline = true; // boolean
let car = null; // null
let y = undefined; // undefined

let names = ["Yaman" , "Fawaz" , "Ahmad" , 50 , true];
names[0] = "Ahmad";
console.log(names[0]);

let carName = "Bmw";
let carModel = "2022";
let carColor = "red";

let car2 = {
    name:"Bmw",
    model: 2022,
    color:"red",
    pasnageers: ["x","y"],
    created:{
        location:'Geramny',
        date:"20/21"
    }
}

let posts = [
    {
        name:'asd',
        desc:'asd'
    },
    {
        name:'asd',
        desc:'asd'
    }
];

console.log(car2.color);


console.log(isOnline);
console.log(firstName + " " + "is Programmer");
// firstName += " is Programmer";

let n1 = 5;
let n2 = 10;
// + Addition
console.log(n1 + n2);
// + Substraction
console.log(n1 - n2);
// + multiplication
console.log(n1 * n2);
// + Division
console.log(n1 / n2);
// + reminder
console.log(n1 % n2);

// Incremnt ++
// postfix increment
console.log(n1++);
console.log(n1);

// prefix increment
console.log(++n1);
// Decrement --

console.log(n1--);

let x = 5;
console.log(++x + x++);

// ******************************************
console.log("******************************************");
// Assignment Operators
let number = 1;
// number = number + 4;
number += 4;
console.log(number);