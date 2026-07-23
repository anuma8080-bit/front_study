let var1;
let var2 = 10;
let var3 = 29;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

console.log(var4);
console.log(var5);
console.log(var6);

let userNmae = "전지훈";
let userNickName = "junttingi";

let displayNmae = userNmae ?? userNickName;
console.log(displayNmae);



let var7 = 1;
let t1 = typeof(var7);
console.log(t1);

let var8 = "oh";
let t2 = typeof(var8);
console.log(t2);

let var9 = 20;

let res = var9%2===0? "짝수" :"홀수";
console.log(res);