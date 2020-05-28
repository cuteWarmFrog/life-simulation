const Directions = require('./../Directions');
const randomElement = require('./../randomElement');

class BouncingCreature {
    constructor() {
        this.direction = randomElement(Object.keys(Directions));
    }
    act(view) {
        if(view.look(this.direction) != " ")
            this.direction = view.find(" ") || "s";
        return {type: "move", direction: this.direction};
    }
}

module.exports = BouncingCreature;