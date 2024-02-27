// 138. Higher Order Function Challenge
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

// 141. A Deeper Understanding of Javascript Objects
var housekeeper1 = {
  yearsOfExperience: 12,

  pame: "Jane",

  leaningRepertoire: ["bathroom", "Lobby", "bedroom"],
};

// Constructor Function
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;

  this.age = age;

  this.hasWorkPermit = hasWorkPermit;

  this.languages = languages;
}

// Initialse Object
var bellBoyl = new BellBoy("Timmy", 19, true, ["French", "English"]);

var bellBoy2 = new BellBoy("Jimmy", 21, false, ["English", "German"]);

function Housekeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;

  this.name = name;

  this.cleaningRepertoire = cleaningRepertoire;
}

var housekeeper1 = new Housekeeper(9, "Tom", ["lobby", "bedroom"]);

// 142. Objects, their Methods and the Dot Notation

function moveSuitcase() {
  alert("May I take your suitcase?");
  pickUpSuitcase();
  move();
}

var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  },
};

// Call Method
bellBoyl.moveSuitcase();

function Housekeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

var housekeeper1 = new Housekeeper(12, "James", ["bedroom"]);
housekeeper1.clean();

// Constructor Function
function Audio(fileLocation) {
  this.fileLocation = fileLocation;
  this.play = function () {
    //Tap into the audio hardware
    //Check the file at fileLocation exists
    //Check the file at fileLocation is a sound file
    //Play the file at fileLocation
  };
}

var toml = new Audio("sounds/tom-l.mp3");
toml.play();

// 145. Understanding Callbacks and How to Respond to Events
$0.addEventListener("click", function(event) {
  console.log(event);
});

$0.addEventListener("click", function(evt) {
  console.log(evt);
}); // you can give any name event or evt

function antoherAddEventListener(typeOfEvent, callback){
  // Detect Event Code...
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeyPress: 2
  }
  if(eventThatHappened.eventType === typeOfEvent){
    callback(eventThatHappened);
  }
}

antoherAddEventListener("keypress", function(event){
  console.log(event);
});