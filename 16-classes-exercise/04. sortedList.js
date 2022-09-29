class List {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(Number(element));
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    remove(index) {
        if (index < 0 || index > this.list.length) {
            throw new Error('Index out of range');
        }
        this.list.splice(index, 1);
        this.list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    get(index) {
        if (index < 0 || index > this.list.length) {
            throw new Error('Index out of range');
        }
        return this.list[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));