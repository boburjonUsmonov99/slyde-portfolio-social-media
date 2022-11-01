$(function(){
$('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open');
})
$('.header__btn-menu').on('click', function () {
    $('header').toggleClass('body--white');
})
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

let slideIndexx = 0;
showSlidess();

function showSlidess() {
  let i;
  let slidess = document.getElementsByClassName("mySlidess");
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slidess.length) {slideIndexx = 1}
  slidess[slideIndexx-1].style.display = "block";
  setTimeout(showSlidess, 4000); // Change image every 2 seconds
}