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

// if (markHigherBMI1 == true)
//   console.log(
//     `Mark's BMI ${bmiM1.toFixed(1)} is higher than John's ${bmiJ1.toFixed(1)}!`
//   );
// else
//   console.log(
//     `John's BMI ${bmiJ1.toFixed(1)} is higher than Mark's ${bmiM1.toFixed(1)}!`
//   );

// Coding Challenge #3

const dataScore = {
  data1: {
    Dolphins: [96, 108, 89],
    Koalas: [88, 91, 110],
  },
  data2: {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 123],
  },
  data3: {
    Dolphins: [97, 112, 101],
    Koalas: [109, 95, 106],
  },
};

const averageScore = (data1, data2, data3) => {
  return (data1 + data2 + data3) / 3;
};
const DolScore = averageScore(
  dataScore.data1.Dolphins[0],
  dataScore.data1.Dolphins[1],
  dataScore.data1.Dolphins[2]
);
const KoaScore = averageScore(
  dataScore.data1.Koalas[0],
  dataScore.data1.Koalas[1],
  dataScore.data1.Koalas[2]
);

function findWinner(DolScore, KoaScore) {
  console.log("Dolphins Score: ", DolScore.toFixed(1));
  console.log("Koalas Score: ", KoaScore.toFixed(1));
  if (DolScore < 100 && KoaScore < 100) console.log("No one win");
  else if (DolScore > KoaScore) console.log("Dolphins win");
  else if (KoaScore > DolScore) console.log("Koalas win");
  else console.log("Draw");
}

// findWinner(DolScore, KoaScore);

// Coding Challenge #4

const dataBill = [275, 40, 430];
let tip = 50 <= dataBill[0] <= 300 ? dataBill[0] * 0.15 : dataBill[0] * 0.2;
// console.log(
//   `Bill is ${dataBill[0]}, tip is ${tip}, total is ${dataBill[0] + tip}`
// );

// JavaScript Fundamentals – Part 2
// Coding Challenge #1
const dataScore2 = {
  data1: {
    Dolphins: [44, 23, 71],
    Koalas: [65, 54, 49],
  },
  data2: {
    Dolphins: [85, 54, 41],
    Koalas: [23, 34, 27],
  },
};

const calcAveragee = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else console.log(`No one win (${avgKoalas} vs. ${avgDolphins})`);
};

// checkWinner(
//   calcAveragee(
//     dataScore2.data2.Dolphins[0],
//     dataScore2.data2.Dolphins[1],
//     dataScore2.data2.Dolphins[2]
//   ),
//   calcAveragee(
//     dataScore2.data2.Koalas[0],
//     dataScore2.data2.Koalas[1],
//     dataScore2.data2.Koalas[2]
//   )
// );

//Coding Challenge #2

const calcTip = (dataBill) => {
  return 50 <= dataBill <= 300 ? dataBill * 0.15 : dataBill * 0.2;
};

// console.log(calcTip(100))

const dataBill2 = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < dataBill2.length; i++) {
  tips[i] = calcTip(dataBill2[i]);
  total[i] = tips[i] + dataBill2[i];
}
// console.log(total)

//Coding Challenge #3

const dataBMIs = {
  person1: {
    fullname: "Mark Miller",
    mass: "78",
    height: "1.69",
  },
  person2: {
    fullname: "John Smith",
    mass: "92",
    height: "1.95 ",
  },
};

//Coding Challenge #4
const billArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const totalArray = [];
for (let i = 0; i < billArray.length; i++) {
  tipsArray[i] = calcTip(billArray[i]);
  totalArray[i] = tipsArray[i] + billArray[i];
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const sumTotal = calcAverage(totalArray);
// console.log(sumTotal.toFixed(1));

// Developer Skills & Editor Setup
// Coding Challenge #1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}ºC in 1 days ...`);
  }
};
// printForecast(data2);

// Data Structures, Modern Operators and Strings
// Coding Challenge #1
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  scorer: {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2,
  },
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};
const players1 = game.players[0];
const players2 = game.players[1];
const gk = players1[0];
const fieldPlayers = players1.slice(1);
const allPlayers = players1.concat(players2);
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const printGoals = () => {
  for (let i = 0; i < game.scored.length; i++) {
    console.log(`Player scored: ${game.scored[i]}`);
  }
};

// console.log(`${game.odds.team1 < game.odds.team2 && "team 1" || "team 2"} has higher win rate`)

// Coding Challenge #2
for (let i = 0; i < game.scored.length; i++) {
  // console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// console.log(
//   `Odd of vitory ${game.team1}: ${game.odds.team1}\nOdd of draw: ${game.odds.draw}\nOdd of victory ${game.team2}: ${game.odds.team2}`
// );

// Coding Challenge #3
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [];

// Working With Arrays
// Coding Challenge #1

const dataDog = {
  test1: {
    Julia: [3, 5, 2, 12, 7],
    Kate: [4, 1, 15, 8, 3],
  },
  test2: {
    Julia: [9, 16, 6, 8, 3],
    Kate: [10, 5, 6, 1, 4],
  },
};

const checkDogs = (arr1, arr2) => {
  newDogsArr = arr1.slice(1);
  allDog = newDogsArr.concat(arr2);
  for (let i = 0; i < allDog.length; i++) {
    console.log(
      `Dog number ${i + 1} is ${
        allDog[i] >= 3 ? "an adult" : "still a puppy"
      } and is ${allDog[i]} years old`
    );
  }
};
// checkDogs(dataDog.test2.Julia, dataDog.test2.Kate);

const dataDog1 = {
  data1: [5, 2, 4, 1, 15, 8, 3],
  data2: [16, 6, 10, 5, 6, 1, 4],
};

function calcAverageHumanAge(ages) {
  let sumAges = 0;
  let humanAge;
  let countAdultDog = 0
  for(let i = 0; i < ages.length; i++){
    humanAge = arr[i] <= 2 ? 2*ages[i] : 16 + ages[i] *4
    if(humanAge > 18){
      sumAges+= humanAge;
      countAdultDog+=1
    }
  }
  console.log(`Average human ages of adult dog is: ${}`)
}
