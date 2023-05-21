class Zoo {
    animalList = {};
    constructor(animalList, startTime) {
        this.startTime = startTime;
        animalList.forEach((animal) => {
            if (animal === "panda") {
                this.animalList[animal] = new Panda(animal);
            } else if (animal === "lion") {
                this.animalList[animal] = new Lion(animal);
            }
        });
        this.openDoors();
    }

    openDoors() {
        setInterval(() => {
            this.timeNow = this.newTime;
            this.checkEatTime();
        }, 1000);
        setInterval(() => {
            for (let animal in this.animalList) {
                console.log(
                    `${animal} has detected hungers: ${this.animalList[animal].detectedHungers}`
                );
            }
        }, 100000);
    }

    get newTime() {
        return new Date().getTime();
    }

    checkEatTime() {
        for (let animal in this.animalList) {
            this.animalList[animal].availableEat.forEach((eat) => {
                if (
                    eat.duration <
                    (this.timeNow - this.startTime) / 1000 // / 60
                ) {
                    if (
                        !this.animalList[animal].detectedHungers.includes(
                            eat.name
                        )
                    ) {
                        console.log(this.animalList[animal].detectedHungers);
                        this.animalList[animal].addHunger = eat.name;
                        console.log(
                            `${animal} Animal is hungry if you want to give ${eat.amount}kg from ${eat.name}, this would be great for ${eat.duration}`
                        );
                    }
                }
            });
        }
    }
}

class Animal {
    detectedHungersList = [];
    constructor(name) {
        this.name = name;
    }
    get detectedHungers() {
        return this.detectedHungersList;
    }
    set addHunger(name) {
        this.detectedHungersList.push(name);
    }
}

class Panda extends Animal {
    constructor(name) {
        super(name);
        this.availableEat = [new EAT("bambus", 1, 60)];
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        this.availableEat = [
            new EAT("rind", 1, 60),
            new EAT("huehner", 10, 60),
            new EAT("pandas", 1, 600),
        ];
    }
}

class EAT {
    constructor(name, kg, duration) {
        this.name = name;
        this.amount = kg;
        this.duration = duration;
    }
}

const AnimalList = ["panda", "lion"];
const ZooObject = new Zoo(AnimalList, new Date().getTime());
