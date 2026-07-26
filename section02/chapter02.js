function returnFalse(){
    console.log("false 함수");
    return false;
}

function returnTrue(){
    console.log("true 함수");
    return true;
}

console.log(returnFalse() || returnTrue());
console.log(returnFalse() && returnTrue());


function printName(value){
    const name = value && value.name;
    console.log(name || '값이 없어요');
}

printName();
printName({name:'전지훈'});