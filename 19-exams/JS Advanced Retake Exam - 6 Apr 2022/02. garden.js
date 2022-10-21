class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.plants.find(x => x.plantName === plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        const plant = this.plants.find(x => x.plantName === plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants = this.plants.filter(x => x.plantName !== plantName);
        this.storage.push({ plantName, quantity: plant.quantity });
        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map(x => `${x.plantName}`);
        
        if(this.storage.length === 0) { 
            result.push('Plants in storage: The storage is empty.');
        }
        let stored = this.storage.map(x => `${x.plantName} (${x.quantity})`);

        let result = [`The garden has ${this.spaceAvailable} free space left.`, `Plants in the garden: ${sortedPlants.join(', ')}`, `Plants in storage: ${stored.join(', ')}`];
        return result.join('\n')
    }
}
