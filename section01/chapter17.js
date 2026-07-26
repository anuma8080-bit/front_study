let arrA = new Array();
let arrB = [];

let arrC = [
    1,
    2,
    3,
    '전지훈',
    true,
    null,
    undefined,
    () => {},
    {},
    []
]

let item = arrC[0];
let item2 = arrC[1];
arrC[0] = 5;
let item3 = arrC[0];


console.log(item,item2,item3);