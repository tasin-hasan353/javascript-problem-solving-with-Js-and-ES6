
const getAvailableProducts = products=> {
    
    const availableProduct = products.filter(product=> {

        const {name, stock} = product;

        if(stock > 0) {
            return product;
        }
        
    })

    return availableProduct;


}


const products = [
    {name: "Pen", stock: 5},
    {name: "Bag", stock: 0},
    {name: "Notebook", stock: 2},
    {name: "Eraser", stock: 0},
]

console.log(getAvailableProducts(products));