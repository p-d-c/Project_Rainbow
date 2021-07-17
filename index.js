var player = document.getElementById('myAudio')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var answer = "";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var buttonFlag = false;

function start() {
	var seed = getRandomInt(0, 7);
	answer = colors[seed];
  buttonFlag = true;
}

function clickRed() {
	if (buttonFlag) {
  if (answer == "red") {
    document.getElementById('snap').innerHTML = "Red"
    player.src = "https://www.youtube.com/embed/yOsNFsG7xLk?autoplay=1&start=20&end=30"
  } else {
  	document.getElementById('snap').innerHTML = "Nope."
  }
  }
}

function clickOrange() {
if (buttonFlag) {
if (answer == "orange") {
  document.getElementById('snap').innerHTML = "Orange"
  player.src = "https://www.youtube.com/embed/akZMVTgCTg0?autoplay=1&start=47&end=64"
  } else {
  	document.getElementById('snap').innerHTML = "Nada."
  }
  }
}

function clickYellow() {
if (buttonFlag) {
if (answer == "yellow") {
  document.getElementById('snap').innerHTML = "Yellow"
  player.src = "https://www.youtube.com/embed/7PDUO3l8xiM?autoplay=1&start=80&end=88"
  } else {
  	document.getElementById('snap').innerHTML = "Mais non."
  }
  }
}

function clickGreen() {
if (buttonFlag) {
if (answer == "green") {
  document.getElementById('snap').innerHTML = "Green3"
  player.src = "https://www.youtube.com/embed/3rAJGRaCoj0?autoplay=1&start=1&end=14"
  } else {
  	document.getElementById('snap').innerHTML = "Nein."
  }
  }
}

function clickBlue() {
if (buttonFlag) {
if (answer == "blue") {
  document.getElementById('snap').innerHTML = "Blue"
  player.src = "https://www.youtube.com/embed/wuJIqmha2Hk?autoplay=1&start=48&end=58"
  } else {
  	document.getElementById('snap').innerHTML = "Zilch."
  }
  }
}

function clickIndigo() {
if (buttonFlag) {
if (answer == "indigo") {
  document.getElementById('snap').innerHTML = "Indigo"
  player.src = "https://www.youtube.com/embed/3wVTmlD86a8?autoplay=1&start=111&end=119"
  } else {
  	document.getElementById('snap').innerHTML = "Zero."
  }
  }
}

function clickViolet() {
if (buttonFlag) {
if (answer == "violet") {
  document.getElementById('snap').innerHTML = "Violet"
  player.src = "https://www.youtube.com/embed/IHisFtYwf1Y?autoplay=1&start=44&end=50"
  } else {
  	document.getElementById('snap').innerHTML = "0."
  }
  }
}
