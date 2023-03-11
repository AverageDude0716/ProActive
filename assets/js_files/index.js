//for background
var background = document.getElementById("background");
var colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#0074D9', '#2ECC40', '#FFDC00'];
setInterval(function()
{

    var rn_color = colors[Math.floor(Math.random() * colors.length)]
    background.style.backgroundColor = rn_color;

})


// responsive top navigation bar
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("show");
});
