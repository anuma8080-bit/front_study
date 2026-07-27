let arr = [1,2,3];
let [a,b,c, d=5] = arr;
console.log(a,b,c,d);


let person = {
    name : '전지훈',
    age : 17,
}

let {name, age ,axtra = '안녛'} = person;


console.log(name, age, axtra);

const func = ({name, age, axtra = '해위'})=>{
    console.log(name,age,axtra);
}

func(person);