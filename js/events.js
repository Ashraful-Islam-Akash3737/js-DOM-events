// onclick method 1:directly  set on the html element
// <button onclick="console.log(7)">click me</button>



// onclick method 2:add onclick function on the html element
// IMPORTANT
// <button onclick="makeRed()">Make body color  RED  by click me</button>
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// onclick method 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}


// onclick method 3 another
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple";
}


// onclick method 4
const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", makePink);

function makePink() {
    document.body.style.backgroundColor = "pink";
}


// onclick method 4 another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
});


// onclick method 4 final
// IMPORTANT
document.getElementById("make-goldenrod").addEventListener('click', function makeGoldenrod(){
    document.body.style.backgroundColor = "goldenrod";
})