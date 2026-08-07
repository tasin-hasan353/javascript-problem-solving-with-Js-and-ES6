/*

//-------- Problem 1: Fix the buggy code
var status = "Order Placed";

for (var i = 1; i <= 3; i++) {
    var status = "Processing Item " + i;
    console.log(status);
}

console.log("Final Status: ", status);



//======== Problem 1 solving:  
let status = "Order Placed";

for (let i = 1; i <= 3; i++) {
    let status = "Processing Item " + i;
    console.log(status);
}

console.log("Final Status: ", status);
// In a word: We will never use var while coding in JS. Because it does not maintain block scope. 


*/




//------ Problem 2: Receipt Generator (template string)

function receiptGenerator(total, name, qty) {
    return `${name} x ${qty} = ${total}`;

}


const calculatePrice = (name, price, qty, cb)=> {
    const total = price * qty;
    // console.log(total);

    return cb(total, name, qty);

}

console.log(calculatePrice("Pen", 10, 3, receiptGenerator));





