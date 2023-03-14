import shoppingCart from "./data.js";

function totalSavory(arr){
    return arr.reduce((acc, curr) => {
        if(curr.type === "savory") return acc += curr.price;
        return acc;
    }, 0);
}

console.log(totalSavory(shoppingCart));

