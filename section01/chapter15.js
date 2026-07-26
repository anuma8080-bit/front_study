
let obj2 = {};


let person = {
    name : '전지훈',
    age : 17,
    job : 'student',

}

let name = person.name;
console.log(name);
let age = person['age'];
console.log(age);
person.favoriteanimal = '강아지';
person['hobby'] = '게임';

console.log(person);


delete person.job;

let result = 'name' in person;
