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

    $('.roats__inner').slick({
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 349,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.work__inner').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 581,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.list__title').on("click", function() {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});