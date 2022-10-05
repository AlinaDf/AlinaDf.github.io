$(document).ready(function() {

    /* Слайдер */
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

    /* Спойлер */

    $('.item-questions__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });

    /* Бургер */

    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on("click", function() {
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });

    /* Скролл */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 150
        }, 2000);

        nav.removeClass('show');
        navToggle.removeClass('active');
    });

    /* Шапка */

    let header = $('#header');
    let headerH;
    let scrollPos = $(window).scrollTop;

    $(window).on("scroll load resize", function() {
        let headerH = header.innerHeight();

        scrollPos = $(this).scrollTop();

        if(scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* Modal */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform:"rotateX(0)"
            });
        }, 200);
    });
    
    modalClose.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        setTimeout(function() {
            modalParent.find(".modal__dialog").css({
                transform:"rotateX(90deg)"
            });
        });

        setTimeout(function() {
            modalParent.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform:"rotateX(90deg)"
        });

        setTimeout(function() {
            $this.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200);

    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
});