function layDiemToan(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(8);
        },1000);
    })
} 

function layDiemVan(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(7);
        },2000);
    })
} 

function layDiemAnh(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(9);
        },3000);
    })
}
const promiseAll=[layDiemToan(),layDiemVan(),layDiemAnh()];
Promise.all(promiseAll).then(data=>{
    console.log(data);
    console.log(data.reduce((acc,cur)=>acc+=cur,0)/data.length);
})