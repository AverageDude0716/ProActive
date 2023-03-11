//for background
var background = document.getElementById("background");
var colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#0074D9', '#2ECC40', '#FFDC00'];
setInterval(function()
{

    var rn_color = colors[Math.floor(Math.random() * colors.length)]
    background.style.backgroundColor = rn_color;

})


// responsive top navigation bar
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});
