const logo = document.querySelector("#logo");
const mobileMenu = document.querySelector("#mobile-menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  logo.classList.toggle("logoVisible");
  mobileMenu.classList.toggle("visible");
  burger.classList.toggle("active");
});

// Logo animation
var aText = new Array("Hi &#128075 I'm Developer");

var iSpeed = 120;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = "";
var iRow;

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.querySelector(".typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos);
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 2000);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();
