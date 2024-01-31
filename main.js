// Race Day
let raceNumber = Math.floor(Math.random() * 1000);
// console.log(raceNumber);

let registeredEarly = true;
let runnersAge  = 14;

if (runnersAge >= 18 && registeredEarly === true) {
    console.log(raceNumber + 1000);
} 

if (runnersAge >= 18 && registeredEarly === true) {
    console.log(`Your race start time is 9:30am and your race number is ${raceNumber + 1000}`);
} else if (runnersAge >= 18 && registeredEarly === false) {
    console.log(`Your race start time is 11am and your race number is ${raceNumber + 1000}`);
} else {
    console.log(`Your race start time is 12:30pm and your race number is ${raceNumber}`);
}
