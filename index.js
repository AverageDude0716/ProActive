//for background
var background = document.getElementById("background");
var colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#0074D9', '#2ECC40', '#FFDC00'];
setInterval(function()
{

    var rn_color = colors[Math.floor(Math.random() * colors.length)]
    background.style.backgroundColor = rn_color;

})

// mobile version
function myFunction() {
    var menu = document.getElementById("myLinks");
    if (menu.style.display == "none") 
    {
      menu.style.display = "block";
    } 
    else 
    {
      menu.style.display = "none";
    }
  }

