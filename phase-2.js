const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  for (let i = 0; i < 10; i++) {
    addNums(i);
  }


}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  for (let i = 0; i < 10; i++) {
    addManyNums(i);
  }

}

module.exports = [addNums10, addManyNums10];