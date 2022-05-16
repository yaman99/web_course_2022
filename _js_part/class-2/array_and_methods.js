let userNames = ["Ahmad" , "Omar" , "Fawaz" ];

console.log(userNames[0]);

userNames[0] = "Yaman";
// ["Yaman" , "Omar" , "Fawaz" ]

// console.log(userNames[0]);
// console.log(userNames[1]);
// console.log(userNames[2]);
// console.log(userNames[3]);
console.log("********************");

let result = "";
for(let i = 0; i < userNames.length; i++){
    result += ` ${userNames[i]}`;
}
console.log(result);

// array methods

let students = ["Omar" , "Ahmad" , "Osama" ];
// students[3] = "Karim";

// add elemnt to last index of the array
students.push("Karim");
students.push("Yaman");

// remove last index from array
students.pop();

students.unshift("Yaman");
students.shift();

console.log(students);

// concat

let computerStudents = ["Ammar" , "fawaz"];
// let allStudents = students.concat(computerStudents);
// console.log(allStudents);

// splice

// students.splice(0 , 3);
// console.log(students);

//sort
students.sort();
console.log(students);

// reverse()

students.reverse();
console.log(students);