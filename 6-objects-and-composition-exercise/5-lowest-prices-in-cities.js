function solve(input) {
    let products = {};

    while (input.length > 0) {
        let [town, product, price] = input.shift().split(" | ");
        price = Number(price);

        if (product in products) {
            if (price < products[product].price) {
                product[product] = price;
                products[product].price = price;
                product[product] = town;
                products[product].town = town;
            }
        } else {
            let obj = {};
            obj.price = price;
            obj.town = town;
            products[product] = obj;
        }
    }
    for (pr in products) {
        console.log(`${pr} -> ${products[pr].price} (${products[pr].town})`);
    }
}


solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
])