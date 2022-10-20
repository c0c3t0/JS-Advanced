class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(productsArr) {
        productsArr.forEach(element => {
            let [productName, productQuantity, productTotalPrice] = element.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        });
        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = { products: {}, price };

            neededProducts.forEach(x => {
                let [productName, productQuantity] = x.split(' ');
                this.menu[meal].products[productName] = productQuantity;
            });

            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        };
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        let result = [];
        for (let meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`)
        }
        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let products = {};
            for (let product in this.menu[meal].products) {
                if (!this.stockProducts[product] || this.stockProducts[product] < this.menu[meal].products[product]) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                } else {
                    products[product] = this.menu[meal].products[product];
                }
            }

            for (let product in products) {
                this.stockProducts[product] -= products[product];
            }
            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}
