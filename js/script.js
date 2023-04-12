const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    brekpoints: {
        992: {
            slidesPerView: 2,
        }
    },

    autoheight: true
});

const swiperModal = new Swiper('.modal__body', {
    slidesPerView: 'auto',
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: {
            el: '.modal__mini',
            slidesPerView: 4,
        }
    },
});

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

document.querySelectorAll('.header__note-dropdown').forEach(function(dropDownWrapper) {

    const dropDownBtn = dropDownWrapper.querySelector('.header__note-text');
    const dropDownList = dropDownWrapper.querySelector('.header__note-body');
    const dropDownListItems = dropDownList.querySelectorAll('.header__note-text');
    
    dropDownBtn.addEventListener('click', function() {
        dropDownList.classList.toggle('header__note-body--visible');
        this.classList.toggle('card__element-button--active');
    });
    
    dropDownListItems.forEach(function(listItem) {
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtn.innerHTML = this.innerHTML;
            dropDownBtn.focus();
            dropDownList.classList.remove('header__note-body--visible');
            document.querySelector('.header__note-body-item').classList.toggle('header__note-body--active');
            document.querySelector('.card__element-button').classList.remove('card__element-button--active');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('header__note-body--visible');
            dropDownBtn.classList.remove('card__element-button--active');
        }
    });
});

$(document).ready(function() {
    $('.btn').on('click', function() {
        $(this).toggleClass('active');
    });

    $('.card__col:first-child').on('click', function() {
        $(this).removeClass('active');
        $('.card__col:last-child').toggleClass('active');
    });

    $('.card__col:last-child').on('click', function() {
        $(this).removeClass('active');
        $('.card__col:first-child').toggleClass('active');
    });

    $('.header__note-block:last-child').on('click', function(){
        $('.header__note-block:first-child').css('display', 'block');
        $(this).css('display', 'none');
    });
    $('.header__note-block:first-child').on('click', function(){
        $('.header__note-block:last-child').css('display', 'block');
        $(this).css('display', 'none');
    });
});