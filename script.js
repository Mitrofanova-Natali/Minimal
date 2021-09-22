const a = {
    propperty: 5
};

a.propperty = 2;

///


///variables 
// let q = 1;

let array =[11,2,3,4,5];

// const newArray = array.filter(myCallback);

// function myCallback(currentValue){
//     return currentValue > 2;
// }

// console.log(newArray);

// array.sort(muSortFunction);

// function muSortFunction(q,w){
//     return w - q
// }
// console.log(array)

const newArr = array.map(fun);

function fun(currentValue){
    return currentValue* currentValue
} 
console.log(newArr)