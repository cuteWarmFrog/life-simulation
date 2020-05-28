

class PlantEater {
	constructor() {
		this.energy = 20;
	}

	act(context) {
		const space = context.find(' ');
		if(this.energy > 60 && space)
			return {type: "reproduce", direction: space};
		const plant = context.find('*');
		if(plant)
			return {type: 'eat', direction: plant}
		if(space)
			return {type: 'move', direction: space};
	};
}

module.exports = PlantEater;