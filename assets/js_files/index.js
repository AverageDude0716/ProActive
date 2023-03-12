//for background
var background = document.getElementById("background");
var colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#0074D9', '#2ECC40', '#FFDC00'];
setInterval(function()
{

    var rn_color = colors[Math.floor(Math.random() * colors.length)]
    background.style.backgroundColor = rn_color;

})


var mobile_icon = document.getElementById("mobile_icon");
var mobile_menu = document.getElementById("mobile_menu");

mobile_icon.addEventListener("click", function()
{
    if(mobile_menu.style.display == "none")
    {
        mobile_menu.style.display = "block";
    }
    else
    {
        mobile_menu.style.display = "none";
    }
});