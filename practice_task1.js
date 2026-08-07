
const getFormattedPrices = prices => {

    const modifiedPrices = prices.map((price) => `$${price}`)

    return modifiedPrices;
}


console.log(getFormattedPrices([100, 250, 75] 
));