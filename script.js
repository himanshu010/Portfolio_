const navOpenButton = document.getElementById("nav-open");
const navCloseButton = document.getElementById("nav-close");
const navContent = document.getElementById("navbarSupportedContent");
const navLink1 = document.getElementById("nav-link1");
const navLink2 = document.getElementById("nav-link2");
const navLink3 = document.getElementById("nav-link3");
const navLink4 = document.getElementById("nav-link4");
const navbarTop = document.getElementById("navbar-on-top");
var myVar;

function clickNavLink() {
  navOpenButton.style.display = "block";
  navCloseButton.style.display = "none";
  navContent.style.display = "none";
}
window.onload = after10s();

function after10s() {
  myVar = setTimeout(showNavbar, 5000);
}
function showNavbar() {
  navbarTop.style.display = "flex";
}

navLink1.onclick = clickNavLink;
navLink2.onclick = clickNavLink;
navLink3.onclick = clickNavLink;
navLink4.onclick = clickNavLink;

function clickNavbutton() {
  navOpenButton.style.display = "none";
  navCloseButton.style.display = "block";
  navContent.style.display = "block";
}

navOpenButton.onclick = clickNavbutton;

function clickClosebutton() {
  navOpenButton.style.display = "block";
  navCloseButton.style.display = "none";
  navContent.style.display = "none";
}

navCloseButton.onclick = clickClosebutton;

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
