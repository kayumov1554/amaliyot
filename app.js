document.getElementById("title").style.display = "block";
document.getElementById("getStarted").style.display = "block";
document.getElementById("image").style.display = "none";
document.getElementById("style1").style.display = "none";
document.getElementById("style2").style.display = "none";
document.getElementById("style3").style.display = "none";
document.getElementById("radius1").style.display = "none";
document.getElementById("radius2").style.display = "none";
document.getElementById("radius3").style.display = "none";
document.getElementById("clear").style.display = "none";
document.getElementById("other").style.display = "none";
document.getElementById("add").style.display = "none";

function getStarted() {
  document.getElementById("title").style.display = "none";
  document.getElementById("getStarted").style.display = "none";
  document.getElementById("image").style.display = "block";
  document.getElementById("style1").style.display = "block";
  document.getElementById("style2").style.display = "block";
  document.getElementById("style3").style.display = "block";
  document.getElementById("radius1").style.display = "block";
  document.getElementById("radius2").style.display = "block";
  document.getElementById("radius3").style.display = "block";
  document.getElementById("clear").style.display = "block";
  document.getElementById("other").style.display = "block";
  document.getElementById("add").style.display = "none";
}

function style1() {
  document.getElementById("image").style.filter = "grayscale(100%)";
  document.getElementById("add").style.display = "block";
}

function style2() {
  document.getElementById("image").style.filter = "contrast(150%)";
  document.getElementById("add").style.display = "block";
}
function style3() {
  document.getElementById("image").style.filter = "blur(3px)";
  document.getElementById("add").style.display = "block";
}

function radius1() {
  document.getElementById("image").style.borderRadius = "30px";
  document.getElementById("add").style.display = "block";
}
function radius2() {
  document.getElementById("image").style.borderRadius = "50px";
  document.getElementById("add").style.display = "block";
}

function radius3() {
  document.getElementById("image").style.borderRadius = "70px";
  document.getElementById("add").style.display = "block";
}

function filter() {
  document.getElementById("image").style.filter = "none";
  document.getElementById("image").style.borderRadius = "0px";
  document.getElementById("text").style.display = "none";
  document.getElementById("addimg").style.display = "block";
  document.getElementById("add").style.display = "none";
}
const images = [
  "/img/manzara.jpg",
  "/img/manzara2.jpg",
  "/img/manzara3.jpg",
  "/img/manzara4.jpg",
];
let currentIndex = 0;

function other() {
  const image = document.getElementById("image");
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
}
function add() {
  document.getElementById("text").innerHTML = "comming soon...";
  document.getElementById("text").style.display = "block";
  document.getElementById("addimg").style.display = "none";
}
