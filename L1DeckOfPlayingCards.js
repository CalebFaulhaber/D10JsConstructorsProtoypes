class Card {
    constructor(suit, value) {
        this.value = value;
        this.suit = suit;

        switch(this.value) {
            case 1: this.value = 'Ace' ; break;
            case 11: this.value = 'Jack' ; break;
            case 12: this.value = 'Queen' ; break;
            case 13: this.value = 'King' ; break;
        };
    };
    toString() {
        return `\'Card { ${this.value} of ${this.suit} }\'`
    };
};


class Deck {
    constructor() {
        let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
        let cards = [];
        for (let i in suits) {
            for (let j = 1; j <= 13; j++) {
                cards.push(new Card(suits[i], j));
            }
        }
        this.Deck = cards;
    }
};

// const deck = {
//     cards: new Deck,
//     shuffle: function() {
//         let remainingCards = [...this.cards];
//         shuffledCards = [];
//         for (let i = remainingCards.length-1; i >= 0; i--) {
//             let random = Math.floor(Math.random() * (i + 1));
//             shuffledCards.push(remainingCards[random]);
//             remainingCards.splice(random,1);
//         };
//         return this.cards = shuffledCards;
//     },
//     draw: function() {
//         this.cards.shift()
//     },
//     reset: function() {
//         this.cards = cards()        
//     }
// }



let myDeck = new Deck;

console.log(myDeck)





// [Lab] Deck of Playing Cards

// Create a class, Card, that represents a playing card. Instances of the card should be constructed with two values: a value and a suit.
// const aceOfSpades = new Card(1, 'spades');
// const tenOfHearts = new Card(10, 'hearts');
// const kingOfDiamonds = new Card(13, 'diamonds');

// Add a prototype method, toString, to Card that returns a string to display the card:
// aceOfSpades.toString() // returns 'Card { Ace of Spades }'
// tenOfHearts.toString() // returns 'Card { 10 of Hearts }'
// kingOfDiamonds.toString() // returns 'Card { King of Diamonds }'

// Create a class, Deck, that represents a deck of playing cards. In the constructor, initialize a full "deck" of Card instances representing all 52 possible cards without jokers storing it in the `Deck` instance. You must not create all 52 cards manually. Use iteration to create all cards.
// Finally, add the following prototype methods to Deck:

// - shuffle method that will randomly reorder the cards in the deck.
// - draw that will remove and return the top card of the deck.
// - reset method which resets deck to all 52 cards in order.