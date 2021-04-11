window.onscroll = function() {scrollFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200 || window.pageYOffset >= sticky) {
    mybutton.style.display = "block";
    navbar.classList.add("sticky")

  } else {
    mybutton.style.display = "none";
    navbar.classList.remove("sticky");
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
