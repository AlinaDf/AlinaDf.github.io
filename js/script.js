/* Чекбокс */

$(document).ready(function() {

    $.each($('.modal__checkbox-body'), function(index, val) {
        if($(this).find('input').prop("checked")==true){
            $(this).addClass('active');
        }
    });
    
    $(document).on("click", '.modal__checkbox-body', function(event) {
        if($(this).hasClass('active')){
            $(this).find('input').prop("checked", false);
        }else{
            $(this).find('input').prop("checked", true);
        }
        $(this).toggleClass('active');
    
        return false;
    });

    /* Бургер */

    burger = $('.header__burger');
    body = $('.header__mob');

    burger.on("click", function() {
        $('.header').toggleClass('active');
        body.toggleClass('active');
        $(this).toggleClass('active');
        $("body").toggleClass('no-scroll');
        $(".header__color").toggleClass("active");
    });

    /* Залипающая шапка */

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
});

/* Попап */

let btns = document.querySelectorAll("*[data-modal]");
let btn = document.querySelectorAll(".modal__close-arrow");

for(let i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let name = btns[i].getAttribute('data-modal');
        let popup = document.querySelector("[data-modal-window='"+name+"']");
        let popupBlock = document.querySelectorAll('.modal__filter');
        let body = document.querySelector('body');
        popup.style.display = "flex";
        body.style.overflow = "hidden";

        let close = document.querySelectorAll(".modal__close");
        let arrowClose = document.querySelectorAll(".arrow__close");

        close.forEach(item => {
            item.addEventListener('click', event => {
                popup.style.display = "none";
                body.style.overflow = "auto";
            });
        });

        arrowClose.forEach(item => {
            item.addEventListener('click', event => {
                popupBlock.forEach(item => {
                    item.style.display = "none";
                });
            });
        });
    });
}