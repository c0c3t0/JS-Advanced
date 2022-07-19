function solve(input) {
    let obj = {};
    let initialChar = '';

    while (input.length > 0) {
        let [product, price] = input.shift().split(" : ")
        price = Number(price);
        obj[product] = price;
    }
    let ordered = Object.keys(obj).sort().reduce(
        (object, key) => {
            object[key] = obj[key];
            return object;
        },
        {}
    );

    for (pr in ordered) {
        if (initialChar !== pr.charAt(0)) {
            console.log(pr.charAt(0));
        }
        initialChar = pr.charAt(0);
        console.log(`  ${pr}: ${ordered[pr]}`);
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)