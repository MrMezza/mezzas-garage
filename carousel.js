var slidePosition = 1;
var autoChangeTimer; // Global timer variable
SlideShow(slidePosition);

// forward/back controls
function plusSlides(n) {
  clearTimeout(autoChangeTimer); // Clear previous timer
  SlideShow(slidePosition + n);
}

// image controls
function currentSlide(n) {
  clearTimeout(autoChangeTimer); // Clear previous timer
  SlideShow(n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  
  if (n > slides.length) {
    slidePosition = 1;
  } else if (n < 1) {
    slidePosition = slides.length;
  } else {
    slidePosition = n;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slidePosition - 1].style.display = "block";
  
  // Set the timer to change the image automatically after x milliseconds
  autoChangeTimer = setTimeout(function() {
    SlideShow(slidePosition + 1);
  }, 4000);
}