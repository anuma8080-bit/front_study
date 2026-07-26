let f1 = null;
let f2 = undefined;
let f3 = 0;
let f4 = -0;
let f5 = "";
let f6 = 0n;
let f7 = NaN;


if(!f1){
    console.log(f1);
}

let t1 = 2;
let t2 = "t"
let t3 = [];
let t4 = {};
let t5 = ()=>{};

function printName(value){
    if(!value){
    console.log('값이 없다');}
    console.log(value.name);
}

let person = {name : "전지훈"};
printName(person);