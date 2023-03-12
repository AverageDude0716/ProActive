//for background
var background = document.getElementById("background");
var colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#0074D9', '#2ECC40', '#FFDC00'];
setInterval(function()
{

    var rn_color = colors[Math.floor(Math.random() * colors.length)]
    background.style.backgroundColor = rn_color;

})


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }