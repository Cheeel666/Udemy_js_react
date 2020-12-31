"use strict";

if (4 == 4){
    console.log("Ok");
} else{
    console.log("Error")
}

const num = 50;

if (num <= 49){
    console.log("Number <= 49");
}

// boring examples
// ...
// ...
// ...
// Ternar operator
(num === 50) ? console.log("Number is equal 50") : console.log("Not 50");

// Switch
switch(num){
    case 49:
        console.log("49");
        break // Break is neccesary
    case 50:
        console.log("50");
        break
    case 60:
        console.log("60");
        break
}

