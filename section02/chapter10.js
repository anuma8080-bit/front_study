let date1 = new Date()
console.log(date1)

let date2 = new Date(2000/1/1)
console.log(date2)

let ts1 = date1.getTime()
console.log(ts1)
let date3 = new Date(ts1)

console.log(date1, date3)

let year = date1.getFullYear()
let month = date1.getMonth()
let date = date1.getDate()
//시간,분,초까지 됀다
console.log(
    year,
    month,
    date
)

date1.setFullYear(2022)
date1.setMonth(0)
date1.setDate(1)

console.log(date1)

console.log(date1.toDateString())
console.log(date1.toLocaleDateString())