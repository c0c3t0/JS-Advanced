function solution() {
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }
    let output = '';

    let obj = {
        restock: (microelementOrRecipe, quantity) => {
            microelements[microelementOrRecipe] += quantity;
            output = "Success";
        },
        prepare: (microelementOrRecipe, quantity) => {
            let entries = Object.entries(recipes[microelementOrRecipe])
            for (let entry of entries) {
                let [key, value] = entry;
                if (microelements[key] < value * quantity) {
                    return output = `Error: not enough ${key} in stock`;

                }
            }
            for (let entry of entries) {
                let [key, value] = entry;
                if (microelements[key] -= value * quantity) {
                    output = "Success";
                }
            }
        },
        report: () => {
            reportOutput = [];
            Object.entries(microelements)
                .forEach((x) => {
                    reportOutput.push(`${x[0]}=${x[1]}`);
                });
            output = reportOutput.join(" ");
        },
    }
    
    return function manager(instructions) {
        let [command, microelementOrRecipe, quantity] = instructions.split(' ');
        quantity = Number(quantity);
        obj[command](microelementOrRecipe, quantity);

        return output;
    }
}


let manager = solution();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));


console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
