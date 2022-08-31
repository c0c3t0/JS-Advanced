function solve(input) {
    let cars = new Map();

    input.forEach(line => {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (!cars.has(brand)) {
            let brands = new Map();
            cars.set(brand, brands);
        }

        if (cars.get(brand).has(model)) {
            cars.get(brand).set(model, cars.get(brand).get(model) + quantity);
        } else {
            cars.get(brand).set(model, quantity);
        }

    });
    let result = '';
    for (let [brand, car] of cars.entries()) { // car == brand
        console.log(`${brand}`)

        for (let [model, quantity] of car.entries()) {
            console.log(`###${model} -> ${quantity}`);
        }
    }

}


solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])