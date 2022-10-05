$(document).ready(function() {
    $('.reviews__inner').slick( {
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
        responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 672,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.item-questions__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on("click", function() {
        $(this).toggleClass('active');
        nav.toggleClass('show');
        $("body").toggleClass('no-scroll');
    });
});