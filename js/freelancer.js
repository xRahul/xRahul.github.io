/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Dynamic Fetching of pages on modal click
$('.portfolio-link').click(function() {
    var fetch_array = this.href.split("_-_");
    var fetch_id = 'fetch-content-'+fetch_array[2];
    var page_name = fetch_array[1];
    var seriously_wrong = '<h2>Something must really be wrong that even error page won\'t load! =(<h2>';

    if($('#'+fetch_id).html() === '' || $('#'+fetch_id).html() === seriously_wrong){
        var xhr_modals= new XMLHttpRequest();
        xhr_modals.open('GET', 'posts/'+page_name+'.html', true);

        xhr_modals.onreadystatechange= function() {
            if (this.readyState!==4 && this.status!==200){

                var xhr_modals_error= new XMLHttpRequest();
                xhr_modals_error.open('GET', 'posts/error.html', true);

                xhr_modals_error.onreadystatechange= function() {
                    if (this.readyState!==4 || this.status!==200){
                        document.getElementById(fetch_id).innerHTML= seriously_wrong;
                    }else{
                        document.getElementById(fetch_id).innerHTML= this.responseText;
                    }
                };
                xhr_modals_error.send();

            }else{
                document.getElementById(fetch_id).innerHTML= this.responseText;
            }
        };
        xhr_modals.send();
    }
});

$('.about-about').hover(
    function(){
        //alert($(this).data('ref'));
        var aa = this.innerHTML;
        this.innerHTML = $(this).data('ref');
        $(this).data('ref', aa);
    }, function(){
        var aa = this.innerHTML;
        this.innerHTML = $(this).data('ref');
        $(this).data('ref', aa);
    }
);