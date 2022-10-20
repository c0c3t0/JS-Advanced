class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || Number(horsepower) < 0 || Number(price) < 0 || Number(mileage) < 0) {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const car = this.availableCars.find(x => x.model === model);
        if (!car) {
            throw new Error(`${model} was not found!`);
        }
        if (car.mileage - desiredMileage > 0 && car.mileage - desiredMileage <= 40000) {
            car.price *= 0.95;
        } else if (car.mileage - desiredMileage > 40000) {
            car.price *= 0.9;
        }
        this.availableCars = this.availableCars.filter(x => x.model !== model);
        this.soldCars.push({ model: car.model, horsepower: car.horsepower, price: car.price });
        this.totalIncome += car.price;
        return `${car.model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }
        let result = ['-Available cars:'];
        this.availableCars.map(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`));
        return result.join('\n');
    }

    salesReport(criteria) {
        let sorting = {
            'horsepower': (a, b) => b.horsepower - a.horsepower,
            'model': (a, b) => a.model.localeCompare(b.model)
        }
        if (!sorting.hasOwnProperty(criteria)) {
            throw new Error("Invalid criteria!");
        }
        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];
        this.soldCars.sort(sorting[criteria])
            .map(x => result.push(`---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$`));
        return result.join('\n');
    }
}
