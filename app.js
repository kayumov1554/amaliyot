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
document.getElementById("images").style.display = "none";
document.getElementById("img1").style.display = "none";
document.getElementById("img2").style.display = "none";
document.getElementById("img3").style.display = "none";

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
  document.getElementById("images").style.display = "none";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
}

function style1() {
  document.getElementById("image").style.filter = "grayscale(100%)";
  document.getElementById("add").style.display = "none";
  document.getElementById("img1").style.filter = "grayscale(100%)";
  document.getElementById("img2").style.filter = "grayscale(100%)";
  document.getElementById("img3").style.filter = "grayscale(100%)";
}

function style2() {
  document.getElementById("image").style.filter = "contrast(150%)";
  document.getElementById("img1").style.filter = "contrast(150%)";
  document.getElementById("img2").style.filter = "contrast(150%)";
  document.getElementById("img3").style.filter = "contrast(150%)";
  document.getElementById("add").style.display = "none";
}
function style3() {
  document.getElementById("image").style.filter = "blur(3px)";
  document.getElementById("img1").style.filter = "blur(3px)";
  document.getElementById("img2").style.filter = "blur(3px)";
  document.getElementById("img3").style.filter = "blur(3px)";
  document.getElementById("add").style.display = "none";
}

function radius1() {
  document.getElementById("image").style.borderRadius = "30px";
  document.getElementById("img1").style.borderRadius = "30px";
  document.getElementById("img2").style.borderRadius = "30px";
  document.getElementById("img3").style.borderRadius = "30px";
  document.getElementById("add").style.display = "none";
}
function radius2() {
  document.getElementById("image").style.borderRadius = "50px";
  document.getElementById("img1").style.borderRadius = "50px";
  document.getElementById("img2").style.borderRadius = "50px";
  document.getElementById("img3").style.borderRadius = "50px";
  document.getElementById("add").style.display = "none";
}

function radius3() {
  document.getElementById("image").style.borderRadius = "70px";
  document.getElementById("img1").style.borderRadius = "70px";
  document.getElementById("img2").style.borderRadius = "70px";
  document.getElementById("img3").style.borderRadius = "70px";
  document.getElementById("add").style.display = "none";
}

function filter() {
  document.getElementById("image").style.filter = "none";
  document.getElementById("image").style.borderRadius = "0px";
  document.getElementById("img2").style.borderRadius = "0px";
  document.getElementById("img1").style.borderRadius = "0px";
  document.getElementById("img3").style.borderRadius = "0px";
  document.getElementById("img2").style.filter = "blur(0px)";
  document.getElementById("img1").style.filter = "blur(0px)";
  document.getElementById("img3").style.filter = "blur(0px)";
  document.getElementById("img2").style.filter = "contrast(0%)";
  document.getElementById("img1").style.fillter = "contrast(0%)";
  document.getElementById("img3").style.filter = "contrast(0%)";
  document.getElementById("img2").style.filter = "grayscale(0%)";
  document.getElementById("img1").style.fillter = "grayscale(0%)";
  document.getElementById("img3").style.filter = "grayscale(0%)";
  document.getElementById("text").style.display = "none";
  document.getElementById("addimg").style.display = "block";
  document.getElementById("add").style.display = "none";
}

function other() {
  document.getElementById("images").style.display = "flex";
  document.getElementById("images").style.gap = "10px";
  document.getElementById("btnimg").style.display = "block";
  document.getElementById("btnimg2").style.display = "block";
  document.getElementById("btnimg3").style.display = "block";
  document.getElementById("done").style.display = "block";
}

function btnimg() {
  document.getElementById("image").style.display = "none";
  document.getElementById("img1").style.display = "block";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img2").style.display = "none";
}
function btnimg2() {
  document.getElementById("image").style.display = "none";
  document.getElementById("img2").style.display = "block";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img3").style.display = "none";
}

function btnimg3() {
  document.getElementById("image").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img3").style.display = "block";
}

function done() {
  document.getElementById("btnimg").style.display = "none";
  document.getElementById("btnimg2").style.display = "none";
  document.getElementById("btnimg3").style.display = "none";
  document.getElementById("done").style.display = "none";
}
new WOW().init();
