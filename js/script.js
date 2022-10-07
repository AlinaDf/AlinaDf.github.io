$(document).ready(function() {
    $('.slider__inner').slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },

            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });

    $('.list__title').on("click", function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});