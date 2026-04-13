let welcomeMessage = `Welcome to our experiment. 
Please read the instructions carefully`;

//Define a variable to hold our experiment name
let experiment = 'Stroop';
console.log(typeof experiment); //string
console.log(experiment.charAt(0)); //'S'

let trialCountMax = 20;
console.log(typeof trialCountMax); //number
//TODO: Randomize colors
let colors = ['red', 'green', 'blue'];

alert('Welcome to the ' + experiment + ' experiment!');

trialCountMax = 40;

//At the halpway point we will display a pause screen
let halfWayCount = trialCountMax / 2;

console.log(halfWayCount); //Expected: 20

//boolean values
let correct = true;
console.log(typeof correct);

console.log(10 > 15); //false
console.log(10 < 15); //true