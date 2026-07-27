let arr1 =[1,2,3];
let d = arr1.pop();
console.log(arr1);
console.log(d)

arr1.push(5);
console.log(arr1);

let a = arr1.shift()
console.log(arr1);
console.log(a)


arr1.unshift(0)
console.log(arr1);

let arr2 = [6,7,8,9];
let arr3 = [5,6];
console.log(arr2.slice(2));

let result = arr3.concat(arr2);
console.log(result);