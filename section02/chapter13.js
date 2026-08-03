function add10(num){
    const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
        if (typeof num === 'number'){
            resolve(num+10)
        }else{
            reject('num이 숫자가아닙니다')
        }
    },3000)
    })
    return promise;
}

const p = add10(0)
p.then((result)=>{
    console.log(result)
    const newP = add10(result)
    return newP;
}).then((result)=>{
    console.log(result)
    return add10(result);
}).then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
})