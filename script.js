var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


console.log(css);
console.log(body.style.background.valueOf("color-stop1"));
console.log(body.style.getPropertyValue("color-stop2"));


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}





setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

