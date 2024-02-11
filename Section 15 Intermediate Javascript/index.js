var n = Math.random();
// 0 - 0.999999999999 default value never reaches to 1 (16 decimal places)
n = n * 6;
n = Math.floor(n); // 6 not included (0-5)
n = Math.floorr(n) + 1; // included 6
console.log(n);

// Love Calculator 1
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1 - 100
alert("Your love score is " + loveScore + "%");

// Love Calculator 2
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(
    "Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
} else {
  alert("Your love score is " + loveScore + "%");
}

// Love Calculator 3
// === also checks for data type whereas == doesn't care about data type
var a = 1;
var b =  "1"
typeof(a);
// 'number'
typeof(b);
// 'string'

if(a===b){
    console.log("yes");
} else{
    console.log("no");
}
// no
if(a==b){
    console.log("yes");
} else{
    console.log("no");
}
// yes

// Love Calculator 4

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if(loveScore > 70) {
  alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
}
if(loveScore > 30 && loveScore <=70) {
  alert("Your love score is " + loveScore + "%");
}
if (loveScore <=30) {
  alert("Your love score is " + loveScore + "%" + " You go together like oil and water.");
}

// BMI Calculator Advanced (IF/ELSE)

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  var interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }

  return interpretation;
}

// Leap year

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

// Collections: Working with Javascript Arrays

var guestList = ["Nilesh", "Jack", "Pam", "James", "Lara", "Jason"];

console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);
console.log(guestList.includes("Nilesh"));

var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
  alert("Welcome");
} else {
  alert("Sorry, may be next time.");
}

// Adding Elements and Intermediate Array Techniques

var output = [];
var count = 1;
function fizzbuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}

// Who's Buying Lunch 

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today!";
}

// Control Statements: While Loops

var output = [];
var count = 1;
function fizzbuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

// 99 Bottles Challenge

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottles";
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }
  if (numberOfBottles <= 0) {
    numberOfBottles = "no more bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

// Control Statements: For Loops

var output = [];

function fizzbuzz() {
  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}

// while --> State 
// for --> Iterate

// Fibonacci Sequence

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
output = fibonacciGenerator(5);
console.log(output);
