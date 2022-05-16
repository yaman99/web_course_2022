// comparisons operatores

// equal to
// console.log(1 == '1');

// equal value and type
// console.log(1 === '1');

// not equal
// console.log(1 != 2);
// not equal value and type
// console.log(1 !== '1');

// console.log(5 > 3);
// console.log(5 < 10);

// console.log(5 >= 5);
// console.log(5 <= 7);

// Logic Operators

// console.log((5 > 4) && (10 > 50));
// console.log((5 > 4) || (10 > 50));
// console.log(!(5 > 4) || (10 > 50));

if (5 > 4 && 10 > 50) {
  console.log('hello');
} else if (4 > 1) {
  console.log('4 > 1');
} else if (6 < 10) {
  console.log('6 < 10');
} else {
  console.log('failed');
}

let day = 4;
switch (day) {
  case 0:
  case 10:
    console.log('Sunday');
    break;
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Default");
}

if(day == 0){
    console.log('Sunday');
} else if (day == 1){
    console.log("Monday");
}else{
    console.log("Default");
}