// JavaScript Fundamentals – Part 1
// Coding Challenge #1
const bmiM1 = BMIs(78, 1.69);
const bmiJ1 = BMIs(92, 1.95);
const bmiM2 = BMIs(95, 1.88);
const bmiJ2 = BMIs(85, 1.76);

function BMIs(mass, height) {
  return mass / height ** 2;
}
function compareBMIs(value1, value2) {
  if (value1 > value2) return true;
  else return false;
}
let markHigherBMI1 = compareBMIs(bmiM1, bmiJ1);
let markHigherBMI2 = compareBMIs(bmiM2, bmiJ2);

// Coding Challenge #2
if (markHigherBMI1 == true)
  console.log(`Mark's BMI ${bmiM1.toFixed(1)} is higher than John's ${bmiJ1.toFixed(1)}!`);
else console.log(`John's BMI ${bmiJ1.toFixed(1)} is higher than Mark's ${bmiM1.toFixed(1)}!`);

// Coding Challenge #3


