const Vector = require('./Vector')

class Grid {
	constructor(width, height) {
     this.width = width;
      this.height = height;
      this.space = new Array(width * height);
  }
  isInside(vector) {
      return vector.x >= 0 && vector.x < this.width &&
	        vector.y >= 0 && vector.y < this.height;
	}
  set(vector, value) {
      this.space[vector.x + this.width * vector.y] = value;
  }
  get(vector) {
      return this.space[vector.x + this.width * vector.y];
  }
  forEach(f,context) {
    for(let y = 0; y < this.height; y++) {
      for(let x = 0; x < this.width; x++) {
        let value = this.space[x + y * this.width];
          if(value != null) {
						f.call(context, value, new Vector(x,y));
          }
      }
  	}
	}
}


module.exports = Grid;