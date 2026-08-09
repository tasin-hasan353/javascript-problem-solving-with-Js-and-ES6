

const findProductByName = (products, name)=> {
    
    const findBag = products.find(product => product.name === "Bag");

    return findBag;
}

const products = [
    {name: "Pen", price: 10},
    {name: "Bag", price: 500},
]

const name = "Bag";

console.log(findProductByName(products, name))