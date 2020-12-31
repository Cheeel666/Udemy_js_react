// Loop lesson
"use strict";

let num = 0;
while (num < 10){
    console.log("While:",num);
    num++;
}
num = 0;
do{
    console.log("Do hile:", num);
    num++;
}while(num < 10);

for (let i = 0; i < 10; i++){
    console.log("For:",i);
}
for (let i = 0; i < 10; i++){
    if (i % 2 == 0){
        console.log("Even");
    } else{
        console.log("Odd");
    }
}