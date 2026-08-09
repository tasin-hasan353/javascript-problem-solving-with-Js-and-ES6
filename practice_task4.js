
const getTotalStockValue = (products) => {
    let totalAmount = 0;

    for(const singleProd of products) {
        const {price, stock} = singleProd;

        totalAmount = totalAmount + (price * stock);
    }

    return `Output: ${totalAmount}`;
}




const products = [
    {price: 50, stock: 4},
    {price: 20, stock: 10},
]


console.log(getTotalStockValue(products))
