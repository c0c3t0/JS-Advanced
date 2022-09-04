class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.')
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let found = this.books.find(book => book.bookName === bookName);
        if (!found) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (found.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        found.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let found = this.books.find(book => book.bookName === bookName);
        if (!found) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!found.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.filter((book) => book.bookName !== bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;
            this.books.sort((a, b) => a['bookName'].localeCompare(b['bookName']))
                .map(book => { result += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.\n` })

            return result.trim();
        } else {
            if (!this.books.find(book => book.bookAuthor === bookAuthor)) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            // let result = '';

            let result = this.books.filter(book => book.bookAuthor === bookAuthor)
                .map(book => { `${book['bookName']} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.\n` });
            return result.trim();
        }
    }
    //
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));