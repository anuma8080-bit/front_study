async function getData(){
    return {
                name:'전지훈',
                age:17
            }
}

async function printDate(){
    getData().then((result)=>{
        console.log(result)
    })
    const data = await getData()
    console.log(data)
}


printDate()