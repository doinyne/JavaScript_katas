class Card {
  constructor(suit, rank) {
     this.suit = suit;
     this.rank = rank;
   }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  createDeck() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'king', 'queen', 'jack'];
  }
} 

class Player { 
  constructor(name) {
     this.playerName = name;
     this.playerCards = [Deck];
   }
}