function startUp() {
  console.log("Waiting for name");
  console.log("User entered name");
  console.log("Waiting for button click");
  var userName = document.getElementById("userName");
  var whatsUpOutput = document.getElementById("whatsUpOutput");
  var userName = userName.value;
  console.log("display howdy message");
  whatsUpOutput.value = "Howdy, " + userName;
}

function countUp() {
  console.log("counting up the letters in the name");
  var userName = document.getElementById("userName");
  var numLetters = document.getElementById("numLetters");
  var userName = userName.value;
  console.log("The User's name is " + userName);
  var letters = userName.length;
  console.log("name length" + letters);
  numLetters.value =
    "You have " + letters + " letters in your name you beautiful person.";
  console.log("you can now see the number of letters in your name");
}