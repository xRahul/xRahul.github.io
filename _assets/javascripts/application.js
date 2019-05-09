//= require vendor
//= require_self

$(document).ready(function() {

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


$(document).ready(function(){
  if ($(".article-comments").length && $("#discus_identifier").val()) {
    var options =
    {
      scriptUrl: '//' + $("#discus_identifier").val() + '.disqus.com/embed.js',
      /*
        @type: string (url)
        @default: none
        @required
        URL of Disqus' executive JS file. The value is memorized on the first function call
        and ignored otherwise because Disqus allows only one instance per page at the time.
      */

      laziness: 0,
      /*
        @type: int (>=0)
        @default: 1
        Sets the laziness of loading the widget: (viewport height) * laziness . For example:
        0 - widget load starts when at the least a tiny part of it gets in the viewport;
        1 - widget load starts when the distance between the widget zone and the viewport is no more than the height of the viewport;
        2 - 2x viewports, etc.
      */

      throttle: 250,
      /*
        @type: int (milliseconds)
        @default: 250
        Defines how often the plugin should make calculations during the
        processes such as resize of a browser's window or viewport scroll.
        250 = 4 times in a second.
      */

      /*
        @type: function
        @default: none
        Disqus-native options. Check Disqus' manual for more information.
      */
      // disqusConfig: function()
      // {
      //   this.page.title       = 'Page Title';
      //   this.page.url         = 'http://url.to/your-website';
      //   this.page.identifier  = 'unique-identifier';
      // }
    };

    // jQuery
    $.disqusLoader( '.disqus', options );
  }
});

