function orderFood(callback){
    const food = '라면'
    callback(food)
}
function coolDown(food, callback){
setTimeout(()=>{
const coolDownedfood = `식은 ${food}`
callback(coolDownedfood)},3000)
}

function freezeFood(food, callback){
setTimeout(() => {
    const freezedFood= `얼어버린 ${food}`
    callback(freezedFood)
    }, 3000);
}

orderFood((food) => {
    console.log(food)
    coolDown(food,(coolDownedfood)=>{
        console.log(coolDownedfood)
        freezeFood(coolDownedfood,(freezedFood)=>{
        console.log(freezedFood)
    })
    })
    


});