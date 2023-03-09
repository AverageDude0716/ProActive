var background = document.getElementById("background");
var colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#0074D9', '#2ECC40', '#FFDC00'];

setInterval(function()
{

    var rn_color = colors[Math.floor(Math.random() * colors.length)]
    background.style.backgroundColor = rn_color;

})

const menu_icon = document.querySelector(".menu_icon");
const menu_bar = document.querySelector(".menu_bar");

menu_icon.addEventListener("click" , ()=>
{
    menu_bar.classList.toggle("show");
});