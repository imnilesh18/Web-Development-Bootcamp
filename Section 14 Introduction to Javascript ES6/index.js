alert("Hello World!");
var myName = "Nilesh";
alert(myName);
var yourName = prompt("What is your name?");
alert("My name is " + myName + ", welcome to my course " + yourName + "!");

// Exchange variables
// a = a + b;
// b = a - b;
// a = a - b;

var c = a;
a = b;
b = c;

// Stirng Concatenation
var message = "Hello";
var myName = "Nilesh";

alert(message + " " +"there," + " " + myName);

var myName = "Nilesh";
myName.length;

var tweet= prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");

var name = "Niliesh";
name.slice(0,1);
name.slice(0,3);
name.slice(1,3);

var tweet= prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

alert(prompt("Compose your tweet:").slice(0,140));

// Captialise first letter of the name
var name = prompt("What is your name?");

var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();

var restofName = name.slice(1, name.length);
restofName = restofName.toLowerCase();

var captialisedName = upperCaseFirstChar + restofName;
alert("Hello, " + captialisedName);

// Operator Precedence
var dogAge = prompt("How old is your dog?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " years old in human years.");

var x = 5;
x++; // x = x + 1
x += x; //12

// Functions
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

getMilk();

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
      
    var numberOfBottles = Math.floor(money / 1.5);
      
    console.log("buy " + numberOfBottles + " bottles of Milk"); 
      
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
getMilk(5); // Output: buy 3 bottles of Milk

function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of Milk"); 
      
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
    return calcChange(money, costPerBottle);
  }
  
  function calcBottles(startingMoney, costPerBottle){
      var numberOfBottles = Math.floor(startingMoney / costPerBottle);
      return numberOfBottles;
  }
  
  function calcChange(startingAmount, costPerBottle){
      var change = startingAmount % costPerBottle;
      return change;
  }
  
console.log("Hello master, here is your " + getMilk(5, 1.5) + " change");

// BMI
function bmiCalculator(weight, height){
    var bmi = weight/(height*height);
    return bmi;
}

function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}






  






