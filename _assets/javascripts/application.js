//= require vendor
//= require_self

$(document).ready(function() {

  /* ScrollAppear */
  if (typeof $.fn.scrollAppear === "function") {
    $(".reveal").scrollAppear();
  }

  /* Zooming */
  /*global Zooming*/
  new Zooming(
    {customSize: "100%", scaleBase: 0.9, scaleExtra: 0, enableGrab: false}
  ).listen("img[data-action='zoom']");

  /* Share buttons */
  $(".article-share a").on("click", function() {
    window.open($(this).attr("href"), "Share", "width=200,height=200,noopener");
    return false;
  });
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