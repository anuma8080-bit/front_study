function main(value){
    console.log(value);
}

function maim(value){
    value();
}

function sub(){
    console.log('i am sub');
}

function repeat(count,calllback){
    for(let i=1;i<=count;i++){
        calllback(i);
    }
}

repeat(5,(idx)=>{
    console.log(idx);
})

repeat(5,(idx)=>{
    console.log(idx*2);
})

repeat(5,(idx)=>{
    console.log(idx*3);
})


main(sub);
maim(sub);