/*
// problem 1: calculate shipping cost 

shippingCostDetermine = (totalTaka, shippingCost = 60) => {

    const determineShipping = totalTaka >= 1000? `Free Shipping`: `Shipping fee: ${shippingCost}`;

    return determineShipping;
    
}


console.log(shippingCostDetermine(560, 100));
console.log(shippingCostDetermine(560));
console.log(shippingCostDetermine(1200, 50));

*/


// problem 2: Find out grade

const getGrade = (mark)=> {
    // condition ? true : false;
    return typeof mark !== "number" ? "Invalid" : mark >= 90? "A+" : mark >= 80 ? "A" : mark >= 60? "B+": "Fail"; 
}

console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(45));
console.log(getGrade([45, 23]));
