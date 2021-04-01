function play() {
  var game = Math.round(Math.random() * 4 + 1);
  if (game == 1) {
    alert("Multiplication!");
    playm();
  }
  if (game == 2) {
    alert("Addition!");
    playa();
  }
  if (game == 3) {
    alert("Subtraction!");
    plays();
  }
  if (game == 4) {
    alert("Division!");
    playd();
  }
}

function playm() {
  var numberone = Math.round(Math.random() * 12 + 1);
  var numbertwo = Math.round(Math.random() * 12 + 1);
  var answer = numberone * numbertwo;
  var guess = prompt("What is " + numberone + " × " + numbertwo + "?");
  if (guess != answer) {
    alert("Wrong!");
    alert("The answer was: " + answer + "!");
  }
  else {
    alert(answer + " was correct!");
  }
}

function playa() {
  var numberone = Math.round(Math.random() * 500 + 1);
  var numbertwo = Math.round(Math.random() * 500 + 1);
  var answer = numberone + numbertwo;
  var guess = prompt("What is " + numberone + " + " + numbertwo + "?");
  if (guess != answer) {
    alert("Wrong!");
    alert("The answer was: " + answer + "!");
  }
  else {
    alert(answer + " was correct!");
  }
}

function plays() {
  var numberone = Math.round(Math.random() * 500 + 500);
  var numbertwo = Math.round(Math.random() * 500 + 1);
  var answer = numberone - numbertwo;
  var guess = prompt("What is " + numberone + " - " + numbertwo + "?");
  if (guess != answer) {
    alert("Wrong!");
    alert("The answer was: " + answer + "!");
  }
  else {
    alert(answer + " was correct!");
  }
}

function playd() {
  var numberone = Math.round(Math.random() * 12 + 1);
  var answer = Math.round(Math.random() * 12 + 1);
  var numbertwo = numberone * answer;
  var guess = prompt("What is " + numbertwo + " ÷ " + numberone + "?");
  if (guess != answer) {
    alert("Wrong!");
    alert("The answer was: " + answer + "!");
  }
  else {
    alert(answer + " was correct!");
  }
}
