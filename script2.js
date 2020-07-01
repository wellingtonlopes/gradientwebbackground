let css = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.querySelector("body");
let randbtn = document.querySelector(".randcolor");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function setDefaultValue() {
    color1.value = "#ff0000";
    color2.value = "#ffff00";
    css.innerText = window.getComputedStyle(body).background.slice(17,-50) + ";";
}

function randomizeGradient() {
    color1.value = "#" + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0);
    color2.value = "#" + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0);
    setGradient();
}

window.addEventListener("load", setDefaultValue);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randbtn.addEventListener("click", randomizeGradient);