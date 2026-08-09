
const getDiscountedTotalForCategory = (products, category) => {

    const filteredProducts = products.filter((product) => product.category === category)
    .map(product => product.price * 0.9)
    .reduce((accumulator, price) => accumulator = accumulator + price , 0);
    return filteredProducts;
    
}



const products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }];

const category = "stationery";

console.log(getDiscountedTotalForCategory(products, category));

