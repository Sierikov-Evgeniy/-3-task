
let array = [];
let randomArray = () =>{
    return Math.round(100*Math.random());
}

let finalRandomArray = () =>{
    for(let i = 0 ; i < 10 ; i++){
        array.push(randomArray());
    }
    console.log(array)
}

finalRandomArray()


 
array.sort(function(a, b) {
  return a - b;
});
console.log(array); 


console.log(array.reverse());