const Grid = require('./Grid')
const Vector = require('./Vector')
const BouncingCreature = require('./creatures/BouncingCreature');
const World = require('./World');
const Wall = require('./creatures/Wall');
const Directions = require('./Directions');
const Plant = require('./creatures/Plant')
const PlantEater = require('./creatures/PlantEater');

let plan = ["############################",
             "#####                 ######",
             "##   ***                **##",
             "#   *##**         **  O  *##",
             "#    ***     O    ##**    *#",
             "#                 ##***    #",
             "#                 ##**     #",
             "#           #*             #",
             "#*          #**            #",
             "#***        ##**    O    **#",
             "##****     ###***       *###",
             "############################"];

let testPlan = ["*  ",
                "   "];            
const legend = {
  "#": Wall,
  "*": Plant,
  "O": PlantEater
}

const world = new World(plan, legend);
animateWorld(world);


function animateWorld(world) {
    setInterval(() => {
        console.clear();
        world.turn();
        console.log(world.toString());
    }, 450)
}