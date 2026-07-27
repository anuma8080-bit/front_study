let arr = [1,2];


for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

for(item of arr){
    console.log(item);
}

const obj = {
    name : 'jihun',
    age:17
}

let keys = Object.keys(obj);

for(let i = 0;i<keys.length;i++){
    console.log(keys[i]);
}

for(item in obj){
    console.log(item);
}