"use strict";

function showFirstMessage(){
    console.log("Скучная функция");
}

//
function calc(a, b){
    return a + b;
}

showFirstMessage();
console.log(calc(4,3));

//
// Дальше идет объяснение про область видимости переменных
//

function ret(){
    let num = 50;
    return num;
}

// Тут интереснее
const logger = function() {
    console.log("Function expression");
};
console.log(logger);
logger();

// Стрелочные функции
const calculate = (a,b) => {
    return a + b
};
console.log(calculate(3,4));