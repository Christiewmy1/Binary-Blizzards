// main.js

// --- 1. ADAPTED LOGIC from Deck.js (Card Deck) ---

// Simple Card class used by the Deck (required for the Deck class to function)
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}

class Deck {
    constructor() {
        this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        this.ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.cards = [];
        this.newDeck();
    }
    
    // Corrected to use 'this.' to access properties
    createDeck() {
        this.cards = [];
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                this.cards.push(new Card(this.suits[i], this.ranks[j], this.values[j]));
            }
        }
    }
    
    // Shuffles deck (Note: Used ChatGPT for help on this section)
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    // Draws card from top of the deck
    drawCard() {
        if (this.cards.length === 0) return null;
        return this.cards.pop();
    }
    
    // Creates a new deck, which includes populating and shuffling
    newDeck() {
        this.createDeck();
        this.shuffleDeck();
    }
}

// --- 2. MAIN INITIALIZATION AND EVENT LISTENERS ---

// Card Deck Initialization
const deck = new Deck();
const cardsRemainingSpan = document.getElementById('cards-remaining');
const drawnCardSpan = document.getElementById('drawn-card');
const shuffleButton = document.getElementById('shuffle-deck');
const drawButton = document.getElementById('draw-card');

function updateDeckDisplay() {
  cardsRemainingSpan.textContent = deck.cards.length;
}

shuffleButton.addEventListener('click', () => {
  deck.newDeck(); // Recreates and shuffles the deck
  drawnCardSpan.textContent = 'Deck shuffled! Draw a card.';
  updateDeckDisplay();
});

drawButton.addEventListener('click', () => {
  const card = deck.drawCard();
  if (card) {
    drawnCardSpan.textContent = card.toString();
  } else {
    drawnCardSpan.textContent = 'Deck is empty! Shuffle to restart.';
  }
  updateDeckDisplay();
});

// Initial display setup (Must be called to show 52 cards on page load)
updateDeckDisplay();