var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/** slide show 1 ends */
/* image slide show 2*/
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
/** slide show ends */
 
function printDiv(divID) {
  //Get the HTML of div
  var divElements = document.getElementById(divID).innerHTML;
  //Get the HTML of whole page
  var oldPage = document.body.innerHTML;
  //Reset the page's HTML with div's HTML only
  document.body.innerHTML = 
    "<html><head><title></title></head><body>" + 
    divElements + "</body>";
  //Print Page
  window.print();
  //Restore orignal HTML
  document.body.innerHTML = oldPage;

}
/** slides show ends */