(function($) {
    "use strict"
    jQuery(document).ready(function($) {
        // custom-navbar-activation
        $(".custom-navbar").on('click', function() {
            $(".main-menu ul").slideToggle(500) ;
        });
        $(window).on('resize', function() {
            if ($(window).width() > 767) {
                $(".main-menu ul").removeAttr('style');
            }
        });
        // smooth-scroll-activation
        $(".main-menu ul li a").on('click', function(event) {
            var linkHref = $(this).attr("href");
            var headerHeight = $(".header-top-area").outerHeight();
            $("html,body").animate({
                scrollTop: $(linkHref).offset().top - headerHeight
            }, 2000);
            event.preventDefault();
        });
        // fixed-menu-activation
        $(window).on('scroll', function() {
            var menuFixed = $("html").scrollTop();
            var menuOuterHeight = $(".header-top-area").outerHeight();
            if (menuFixed > menuOuterHeight) {
                $(".header-top-area").css({
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                    'width': '100%',
                    'background': '#00d2ff',
                    'padding': '18px 0',
                    'zIndex': '9999'
                });
            } else $(".header-top-area").removeAttr('style');
        });
        // video-popup-activation 
        $('.video-icon a').magnificPopup({
            type: 'iframe'
        });
        // tab-slider-activation
        $('.tab-slider').owlCarousel({
            loop: true,
            margin: 15,
            items: 3,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            navText: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 3
                },
                991: {
                    items: 3
                }
            }
        });
        // tab-accordion-activation 
        $(".tab-accordion ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });
        // screenshot-slider-activation
        $('.screenshot-slider').owlCarousel({
            loop: true,
            margin: 15,
            items: 5,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            navText: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 3
                },
                991: {
                    items: 5
                }
            }
        });
        // testimonial-slider-activation
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 3,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            navText: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });
        // to-top-activation 
        $(".to-top").on('click', function() {
            $("html").animate({
                "scrollTop": "0"
            }, 2000);
        });
        $(window).on('scroll', function() {
            var toTopVisible = $("html").scrollTop();
            if (toTopVisible > 500) {
                $(".to-top").fadeIn();
            } else {
                $(".to-top").fadeOut();
            }
        });
    });

    jQuery(window).on('load', function() {
        // preloader-activation
        $(".jaria-preloader").fadeOut(500);
        // animation-activation
        new WOW().init();
    });
})(jQuery);