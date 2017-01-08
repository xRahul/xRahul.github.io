//= require vendor
//= require_self

// Initialize fluidbox
$(function () {
  $('.fluidbox-trigger').fluidbox();
})

// Initialize scrollreveal
window.sr = ScrollReveal({ reset: true });
sr.reveal('.reveal', {
  distance: '0',
  duration: 500,
  easing: 'ease-in-out',
  origin: 'top',
  scale: 1,
  reset: false,
  viewFactor: 0
});

$(document).ready(function(){
  if ($(".technology-list-a-svg").length) {
    $(".technology-list-a-svg").hover(function(){
        $(this).children(":first").css("top", "25%");
        $(this).children(":first").css("left", "15%");
        $(this).children(":first").css("width", "70%");
        $(this).children(":first").css("height", "50%");
      }, function(){
        $(this).children(":first").css("top", "35%");
        $(this).children(":first").css("left", "25%");
        $(this).children(":first").css("width", "50%");
        $(this).children(":first").css("height", "30%");
      }
    );
  }
});