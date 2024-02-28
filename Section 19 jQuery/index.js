alert("working");
for (i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "red";
  });
}

$("button").click(function () {
  $("hl").css("color", "red");
});

document.querySelector("h1");

// Vs.

$("h1").css("color", "green");
$("button");
$("h1").css("color", "green");
$("h1").addClass("big-title margin-50");
$("h1").hasClass("margin-50"); // true or false

$("h1").text("Bye");
$("button").html("<em>Hey</em>");

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

$("h1").attr("class"); // gives all the classes that are associated with h1

$("h1").click(function () {
  $("h1").css("color", "purple");
});

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  console.log(event.key);
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});

$("h1").on("click", function () {
  $("h1").css("color", "purple");
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");

// before(), after(), prepend(), append()

$("button").remove(); // This will remove all the buttons that are present

$("button").on("click", function () {
  $("h1").hide();
});

$("h1").show();

// hide , show or toggle:
$("button").on("click", function () {
  $("h1").toggle();
});

// fadeOut and fadeIn or fadeToggle:
$("button").on("click", function () {
  $("h1").fadeOut();
});

$("button").on("click", function () {
  $("h1").fadeIn();
});

$("button").on("click", function () {
  $("h1").fadeToggle();
});

// slideUp(), slideDown() and slideToggle()
$("button").on("click", function () {
  $("h1").slideUp();
});

$("button").on("click", function () {
  $("h1").slideDown();
});

$("button").on("click", function () {
  $("h1").slideToggle();
});

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
}); // it for numeric values only not for things like colors, etc.

$("button").on("click", function () {
  $("h1").animate({ margin: "20%" });
});

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
