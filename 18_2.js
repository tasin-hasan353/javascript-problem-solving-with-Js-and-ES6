/*
function calculatePrice(discount = 5, ...prices) {
    

    // let sum = 0;
    const totalPrice = prices.reduce((sum, price)=> {
        // console.log("Hello");
        sum = sum + price;
        
        return sum;
    }, 0);

    // console.log(totalPrice);
    const discountPrice = totalPrice * discount / 100;

    return totalPrice - discountPrice;

}


console.log(calculatePrice(undefined, 10, 100, 200, 200, 90));







const mergeArrRemoveDuplicate = (array1, array2) => {
    const arr3 = [...array1, ...array2];

    console.log(arr3);

    const newArray = [];
    for(let i = 0; i < arr3.length; i++) {
        if(!newArray.includes(arr3[i])) {
            newArray.push(arr3[i]);
        }
    }
    console.log(newArray);

}


mergeArrRemoveDuplicate([1, 4, 5, 2, 3], [4, 2, 8, 10]);
*/

function merGingArr(arr1, arr2) {
    return [...arr1, ...arr2];
}



const mergeAndDuplicateRemove = (arr1, arr2) => {
    const mergeArr = merGingArr(arr1, arr2);

    const duplicateRemove = new Set(mergeArr);

    console.log(duplicateRemove);

    return [...duplicateRemove];
}

console.log(mergeAndDuplicateRemove([1, 4, 5, 2, 3], [4, 2, 8, 10]));


