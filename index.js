//sticky navbar
$(document).ready(function () {
    //! Transition effect for navbar
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 0) {
            $(".navbar").addClass("scrolled");
            $(".navbar-image").css("width", "110px");
        } else {
            $(".navbar").removeClass("scrolled");
            $(".navbar-image").css("width", "130px");
        }
    });
    // $(window).on("resize", function () {
    //     if ($(window).width() < 992) {
    //         $(".navbar").addClass("scrolled");
    //         $(".navbar-image").css("width", "110px");
    //     } else {
    //         $(".navbar").removeClass("scrolled");
    //         $(".navbar-image").css("width", "130px");
    //     }
    // });

    //! How it works
    $("#home1").click(function () {
        $(".info1").css("display", "block");
        $(".info2").css("display", "none");
        $(".info3").css("display", "none");
    });
    $("#install").click(function () {
        $(".info1").css("display", "none");
        $(".info2").css("display", "block");
        $(".info3").css("display", "none");
    });
    $("#run").click(function () {
        $(".info1").css("display", "none");
        $(".info2").css("display", "none");
        $(".info3").css("display", "block");
    });

    //!modal link reload
    $("#myModal").on("hidden.bs.modal", function (e) {
        var $iframes = $(e.target).find("iframe");
        $iframes.each(function (index, iframe) {
            $(iframe).attr("src", $(iframe).attr("src"));
        });
    });

    //!client section
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });

    //!screenshot slider
    $(".screenshot-slider").slick({
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
        ],
    });
});
