function solve(array) {
    let initialMap = new Map();
    let outputMap = new Map();

    array.forEach(element => {
        let [fruit, quantity] = element.split(' => ');

        if (!initialMap.has(fruit)) {
            initialMap.set(fruit, 0);
        }
        initialMap.set(fruit, initialMap.get(fruit) + Number(quantity));

        while (initialMap.get(fruit) >= 1000) {
            initialMap.set(fruit, initialMap.get(fruit) - 1000);
            outputMap.set(fruit, (outputMap.get(fruit) || 0) + 1);
        }
    });
    
    for (let [key,value] of outputMap) {
        console.log(`${key} => ${value}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)