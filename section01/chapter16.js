const animal = {
    type :'고양이',
    name:'나비',
    color:'pink'
}

animal.age = 2;
animal.name = "앙큼이";
delete animal.color;

console.log(animal);

const person = {
    name:'전지훈',
    age : 17,
    sayHi : ()=>{
        console.log('해위')
    }
}

person.sayHi();