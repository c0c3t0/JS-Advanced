function printDeckOfCards(cards) {
    let result = [];

    try {
        cards.forEach(card => {
            let cardSuit = card.charAt(card.length - 1);
            let cardFace = card.slice(0, card.length - 1)
            result.push(createCard(cardFace, cardSuit).toString());
        });

        console.log(result.join(' '));

    } catch (error) {
        console.log(error.message);
    }

    function createCard(cardFace, cardSuit) {
        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validCardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (!validCardFaces.includes(cardFace) || !Object.keys(validCardSuits).includes(cardSuit)) {
            throw new Error(`Invalid card: ${cardFace}${cardSuit}`);
        }

        return {
            cardFace,
            cardSuit,
            toString() {
                return this.cardFace + validCardSuits[this.cardSuit];
            }
        }
    }
}

cards = ['AS', '10D', 'KH', '2C'];
printDeckOfCards(cards);

cards2 = ['5S', '3D', 'QD', '1C'];
printDeckOfCards(cards2);

