let arr1 = [1,2,3];
arr1.forEach((item,idx, arr)=>{
    console.log(item*2);
});

let arr2 = [1,2,3];

isInClude = arr2.includes(3);
console.log(isInClude);

let arr3 = [1,2,3];
let index = arr3.indexOf(3);
console.log(index);

let arr4 = [{name:'전지훈'},{name:'전준영'}];
let findedindex = arr4.findIndex((item)=>{
    if(item.name = '전지훈'){
        return true;
    }
});
console.log(findedindex);

let arr5 = [{name :'전지훈'},{name:'전준영'}]
const finded = arr5.find((item)=>item.name = '전준영');
console.log(finded);