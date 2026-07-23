function greeting(){
    console.log('안녕하세요');
}

console.log('호출전');
greeting();
console.log('호출후');


function getArea(width,height){
    let area = width*height;
    console.log(area);
    function another(){
        console.log('another');
    }
    another();
    return area;
}

getArea(10,20);
getArea(30,100);
area1 = getArea(20,20);
console.log(area1*3);