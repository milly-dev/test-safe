//Mission 1
// Button 1 Changing background color
const buttonBackground = document.getElementById("btn-background");

buttonBackground.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8);
  return color;
}

//Button 2

const mouseTarget = document.getElementById("btn-two");

mouseTarget.addEventListener("mouseenter", (e) => {
  setVisiblityButton(false);
});
mouseTarget.addEventListener("mouseleave", (e) => {
  setVisiblityButton(true);
});

function setVisiblityButton(visible) {
  buttonFive.style.visibility = visible ? "visible" : "hidden";
  buttonThree.style.visibility = visible ? "visible" : "hidden";
  buttonFilterRouges.style.visibility = visible ? "visible" : "hidden";
  buttonBackground.style.visibility = visible ? "visible" : "hidden";
}

//Button 3
const buttonThree = document.getElementById("btn-three");
buttonThree.addEventListener("click", () => {
  decompte();
});

let cpt = 10;
let x;

function decompte() {
  if (cpt >= 0) {
    let sec = " seconde.";
    if (cpt > 1) {
      sec = " secondes.";
    }
    buttonThree.innerHTML = "Début dans…" + cpt + sec;
    cpt--;
    x = setTimeout("decompte()", 1000);
  } else {
    showCoords();
    clearTimeout(x);
    cpt = 10;
  }
}

let posX, posY;

document.addEventListener("mousemove", (event) => {
  posX = event.clientX;
  posY = event.clientY;
});

function showCoords() {
  let coords = "X coords: " + posX + ", Y coords: " + posY;
  buttonThree.innerHTML = coords;
}

// Button 4 Displaying only element includes rouges

const buttonFilterRouges = document.getElementById("btn-filter-rouges");

buttonFilterRouges.addEventListener("click", () => {
  setVisiblity(false);
});

function setVisiblity(visible) {
  let ul, li;
  ul = document.getElementById("Ul");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    if (!li[i].innerHTML.toLowerCase().includes("rouges")) {
      li[i].style.display = visible ? "" : "none";
    }
  }
}

// Button 5

const buttonFive = document.getElementById("sort");

buttonFive.addEventListener("click", () => {
  ul = document.getElementById("Ul");
  sortList(ul);
  setVisiblity(true);

});

function sortList(ul) {
  var new_ul = ul.cloneNode(false);

  // Add all lis to an array
  var lis = [];
  for (var i = ul.childNodes.length; i--; ) {
    if (ul.childNodes[i].nodeName === "LI") lis.push(ul.childNodes[i]);
  }

  // Sort the lis in descending order
  lis.sort(function (a, b) {
    return a.textContent.localeCompare(b.textContent);
  });

  // Add them into the ul in order
  for (var i = 0; i < lis.length; i++) new_ul.appendChild(lis[i]);
  ul.parentNode.replaceChild(new_ul, ul);
}

//Mission 2
const inputText = document.getElementById("text");
const buttonSubmit = document.getElementById("btn-submit");

buttonSubmit.addEventListener("click", () => {
  GetName();
});

function GetName() {
  var x = document.getElementById("text").value;
  document.getElementById(
    "output"
  ).innerHTML = `Bonjour ${x} bienvenue sur le site !`;
}
