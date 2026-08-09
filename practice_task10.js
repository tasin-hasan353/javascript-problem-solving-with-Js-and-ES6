const getTopSellingProduct = (orders) => {
    const totals = orders.reduce((acc, order) => {
        // console.log(order);

        acc[order.product] = (acc[order.product] || 0) + order.unitsSold;

        return acc;
    }, {});

    const slowUnderstand = Object.entries(totals);
    // console.log(slowUnderstand);

    const mapping = slowUnderstand.map(([product, unitsSold]) => ({product, unitsSold}));

    const expectedValue = mapping.reduce((top, current) => {
        return current.unitsSold > top.unitsSold? current:top;
    }).product;

    
    return expectedValue;


}




const orders = [
    {product: "Pen", unitsSold: 30},
    {product: "Bag", unitsSold: 12},
    {product: "Pen", unitsSold: 25},
    {product: "Notebook", unitsSold: 25},
    {product: "Notebook", unitsSold: 55},
]

console.log(getTopSellingProduct(orders));