
$(document).ready(function () {

    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 30
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        try {
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top - 70
            }, 500);
        } catch{ 
            if (link.attr("target") === '_blank') {
                window.open(link.attr('href'));    
            } else {
                window.location = link.attr('href');
            }

        }
        $("#navbar").removeClass("in");
        event.preventDefault();
    });


    if ($(this).scrollTop() > 200)
        $(".btnBackToTop").removeClass("hidden");
    else
        $(".btnBackToTop").addClass("hidden");

    // Back to top Button
    $("#btnBackToTop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, '500');
        return false;
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200)
    $(".btnBackToTop").removeClass("hidden");
else
    $(".btnBackToTop").addClass("hidden");
});

// Activate WOW.js plugin for animation on scrol
//  new WOW().init();