let a = 1; //지역 스코프

function funA(){
    let b = 1;//지역스코프
    function funB(){
        console.log('b');
    }
}

console.log(a);
// console.log(b); <- 오류
//funB()

if(true){
    let a = 'b'
    function funC(){
        console.log('c');//<-if문, for문에서 함수는 지역스코프 아님
    }
}
funC();