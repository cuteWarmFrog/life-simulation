const Directions = require('./Directions');
const charFromElement = require('./charFromElement');
const randomElement = require('./randomElement');

class View {
	constructor(world, vector) {
		this.world = world;
		this.vector = vector;
	}

	look(dir) {
		const target = this.vector.plus(Directions[dir]);
		if(this.world.grid.isInside(target))
			return charFromElement(this.world.grid.get(target));
		else
			return '#';
	}

	findAll(ch) {
		const found = [];
		for(let dir in Directions) {
			if(this.look(dir) == ch)
				found.push(dir);
		}
		return found;
	}

	find(ch) {
		const found = this.findAll(ch);
		return found.length == 0 ? null : randomElement(found);
	}
}

module.exports = View;