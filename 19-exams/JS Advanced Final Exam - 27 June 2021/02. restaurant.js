class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let result = []
        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }

                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        
        }
        return this.history.join('\n');

    }

    addToMenu() {

    }

    showMenu() {

    }

    makeTheOrder() {

    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts([
    'Banana 10 5',
    'Banana 20 10',
     'Strawberries 50 30',
      'Yogurt 10 10', 
      'Yogurt 500 1500', 
      'Honey 5 50']));