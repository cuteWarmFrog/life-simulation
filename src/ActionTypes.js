const elementFromChar = require('./elementFromChar')

const ActionTypes = {
	move: function(critter, vector, action) {
		const dest = this.checkDestination(action, vector);
		if(critter.energy 	)
		if(dest == null || 
			critter.energy <= 1 ||
			this.grid.get(dest) != null)
			return false;
		critter.energy -= 1;
		this.grid.set(vector, null);
		this.grid.set(dest, critter);
		return true;
	},

	grow: function(critter) {
		critter.energy += 0.5;
		return true;
	},

	eat: function(critter, vector, action) {
		const dest = this.checkDestination(action, vector);
		const atDest = dest != null && this.grid.get(dest);
		if(!atDest || atDest.energy == null)
			return false;
		critter.energy += atDest.energy;
		this.grid.set(dest, null);
		return true;
	},

	reproduce: function(critter, vector, action) {
		const baby = elementFromChar(this.legend, critter.originChar);
		const dest = this.checkDestination(action, vector);
		if(dest == null ||
			critter.energy <= 2 * baby.energy ||
			this.grid.get(dest) != null)
			return false;
		critter.energy -= 2 * baby.energy;
		this.grid.set(dest, baby);
		return true;		
	} 
}

module.exports = ActionTypes;