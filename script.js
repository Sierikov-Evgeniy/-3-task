
let a = [];
let b = () =>{
    return Math.round(100*Math.random());
}

let c = () =>{
    for(let i = 0 ; i < 10 ; i++){
        a.push(b());
    }
    console.log(a)
}

c()


 
a.sort(function(A, B) {
  return A - B;
});
console.log(a); 