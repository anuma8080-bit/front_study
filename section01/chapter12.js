function funcA(){
    console.log("funA");
}

let varA = funcA;

varA();

let varB = function(){// 호스팅안됨
    console.log("funB");
}

varB();

let varC = () => {//호스팅 안됨
    console.log("varC");
}

varC()

let varD = (value) =>{
    console.log(value);
    return value+10;
}

console.log(varD);
console.log(varD(10)); 