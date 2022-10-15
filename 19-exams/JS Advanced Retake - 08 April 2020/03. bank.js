class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let { firstName, lastName, personalId } = customer;
        personalId = Number(personalId);

        if (this.allCustomers.find(x => x.personalId === personalId)) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        let person = { firstName, lastName, personalId };
        this.allCustomers.push(person);

        return person;
    }

    depositMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let person = this.allCustomers.find(x => x.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        if (!person.hasOwnProperty('totalMoney')) {
            person.totalMoney = 0;
        }
        if (!person.hasOwnProperty('transactions')) {
            person.transactions = [];
        }

        person.transactions.unshift(`${person.transactions.length + 1}. ${person.firstName} ${person.lastName} made deposit of ${amount}$!`)
        person['totalMoney'] += amount;
        return `${person.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let person = this.allCustomers.find(x => x.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }
        if (person.totalMoney < amount) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
        }
        if (!person.hasOwnProperty('transactions')) {
            person.transactions = [];
        }

        person.transactions.unshift(`${person.transactions.length + 1}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`)

        person.totalMoney -= amount;
        return `${person.totalMoney}$`

    }

    customerInfo(personalId) {
        personalId = Number(personalId);

        let person = this.allCustomers.find(x => x.personalId === personalId);
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        let result = [
            `Bank name: ${this._bankName}`,
            `Customer name: ${person.firstName} ${person.lastName}`,
            `Customer ID: ${personalId}`,
            `Total Money: ${person.totalMoney}$`,
            `Transactions:`];

        person.transactions.forEach(x => {
            result.push(x);
        });

        return result.join('\n');
    }
}

