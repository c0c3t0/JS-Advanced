class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (Number(this.spaceAvailable) - Number(spaceRequired) <= 0) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        for (let plant in this.plants) {
            if (this.plants[plant].plantName === plantName) {
                if (this.plants[plant].ripe === true) {
                    throw new Error(`The ${plantName} is already ripe.`);
                }

                if (quantity <= 0) {
                    throw new Error("The quantity cannot be zero or negative.");
                } else {
                    this.plants[plant].ripe = true;
                    this.plants[plant].quantity += Number(quantity);

                    if (quantity === 1) {
                        return `${quantity} ${plantName} has successfully ripened.`;
                    } else if (quantity > 1) {
                        return `${quantity} ${plantName}s have successfully ripened.`;

                    }
                }
            }
        }
        if (!this.plants.find(plant => plant.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }

    harvestPlant(plantName) {
        if (!this.plants.find(plant => plant.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        for (let plant in this.plants) {
            if (this.plants[plant].plantName === plantName) {
                if (this.plants[plant].ripe === false) {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
                } else {
                    this.storage.push([this.plants[plant].plantName, this.plants[plant].quantity]);
                    this.spaceAvailable += this.plants[plant].spaceRequired;
                    this.plants = this.plants.filter((plant) => plant.plantName !== plantName);

                    return `The ${plantName} has been successfully harvested.`
                }
            }
        }
    }

    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `;

        result += this.plants.map(plant => plant['plantName']).join(', ') + '\n';
        
        if (this.storage.length === 0) {
            result += "Plants in storage: The storage is empty.";
        } else {
            result += 'Plants in storage: ';
            let harvested = [];
            for (let info of this.storage) {
                harvested.push(`${info[0]} (${info[1]})`)
            }
            result += harvested.join(', ')
        }
        return result;
    }
}


// Input 1
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// Output 1
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// Uncaught Error Error: Not enough space in the garden.

// // // Input 2
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// Output 2
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The orange is already ripe.


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// Output 3
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: There is no olive in the garden.

// Input 4
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// Output 4
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The quantity cannot be zero or negative.

// Input 5
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// Output 5
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: There is no olive in the garden.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: The raspberry cannot be harvested before it is ripe.


// Input 6
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.harvestPlant('apple'));

console.log(myGarden.generateReport());

// Output 6
// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
