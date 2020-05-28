const Grid = require('./Grid');
const Vector = require('./Vector');
const elementFromChar = require('./elementFromChar');
const charFromElement = require('./charFromElement');
const Directions = require('./Directions');
const View = require('./View')
const ActionTypes = require('./ActionTypes');

class World {
  constructor(map, legend) {
	this.grid = new Grid(map[0].length, map.length);
	this.legend = legend;
	map.forEach((line,y) => {
	  for(let x = 0; x < line.length; x++) {
		this.grid.set(new Vector(x,y),
		elementFromChar(legend, line[x]));
	  }
	});
  }

  toString() {
	let output = '';
	for(let y = 0; y < this.grid.height; y++) {
	  for(let x = 0; x < this.grid.width; x++) {
		output += charFromElement(this.grid.get(new Vector(x,y)));
	  }
	  output += '\n';
	}
	return output;
	}
	
	turn() {
		const acted = [];
		this.grid.forEach(function(critter, vector) {
			if(critter.act && acted.indexOf(critter) == -1) {
				acted.push(critter);
				this.letAct(critter, vector);
			}
		}, this);
	}

	letAct(critter, vector) {
		let action = critter.act(new View(this, vector));
		let handled = action &&
			action.type in ActionTypes &&
			ActionTypes[action.type].call(this, critter,
																		vector, action);

		if(!handled) {
			critter.energy -= 0.2;
			if(critter.energy <= 0)
				this.grid.set(vector, null);
		}
	}

	checkDestination(action, vector) {
		if(Directions.hasOwnProperty(action.direction)) {
			let dest = vector.plus(Directions[action.direction]);
			if(this.grid.isInside(dest))
				return dest;
		}
	}
}


module.exports = World;