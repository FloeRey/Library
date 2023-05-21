
class Game {
    constructor() {
        this.board = new Board();
    }
}

class Board {
    constructor() {
        this.places = [ ];
    }
}

class Place {
    constructor(name) {
        this.name = name;
        this.buildings = [ ];
    }
}

class Building {
    constructor(color) {
        this.color = color;
    }
}

class House extends Building {
    constructor() {
        super("green");
        this.rentalFee = 153.5;
    }
}

class Hotel extends Building {
    constructor() {
        super("red");
        this.rentalFee = 45.05;
    }
}



const game = new Game();
const zurichPlace = new Place("Zürich Paradeplatz");
game.board.places.push(zurichPlace);

zurichPlace.buildings.push(new Hotel());
zurichPlace.buildings.push(new Hotel());

console.log(`Number of buildings: ${game.board.places[0].buildings.length}`, "Domain Model zu OOD - Demo");

