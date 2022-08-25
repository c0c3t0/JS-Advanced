function factory(cardFace, cardSuit) {
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    if (!validCardFaces.includes(cardFace)) {
        throw new Error('Error');
    }

    return {
        cardFace,
        cardSuit,
        toString() {
            return this.cardFace + validCardSuits[this.cardSuit];
        }
    }
}

let card = factory('A', 'S');
let card2 = factory('10', 'H');
let card3 = factory('1', 'C');
console.log(card.toString());
console.log(card2.toString());
console.log(card3.toString());