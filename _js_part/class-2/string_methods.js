let text = "ABCDEFG";
console.log(text.length);

// replace
text = "Hello World";
let result = text.replace("World" , "Fawaz");
console.log(result);

// char
console.log(text[1]);
console.log(text.charAt(1));

// indexOf
result = text.indexOf("H");
console.log(result);

// toUpperCase
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Concat
let name1 = "yaman";
console.log(text + " Fawaz" + " " + name1);
result = text.concat(" Fawaz" , 2);
console.log(result);

// trim
text = "            Hello World           ";
result = text.trim();
console.log(result);

text = "Hello World , Fawaz and Ahmad";

//split
result = text.split(",");
console.log(result);


