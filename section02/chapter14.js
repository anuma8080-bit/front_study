async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name:'전지훈',
                age:17
            });

        },1500)
    })
}

async function printDate(){
    getData().then((result)=>{
        console.log(result)
    })
    const data = await getData()
    console.log(data)
}


printDate()