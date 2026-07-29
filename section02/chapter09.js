let arr1 = [
    {name:'전지훈', hobby:'테니스'},
    {name:'전준영', hobby:'테니스'},
    {name:'김지후', hobby:'독서'},
    
];

const tennisPeople = arr1.filter((item)=>{
    item.hobby === '테니스';
});

console.log(tennisPeople);

let arr2 = [1,2,3];

const filterArr2 = arr2.map(ltem,idx,arr=>{
    return item*2;
});

console.log(filterArr2);

arr2.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    if(a===b){
        return 0;
    }
})