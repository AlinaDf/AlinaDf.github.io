// /* Slider */

// const slides = document.querySelectorAll('.intro__slider');
// const dots = document.querySelectorAll('.intro__dot');

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides) {
//         slide.classList.remove('active');
//     }

//     slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots) {
//         dot.classList.remove('active');
//     }

//     dots[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//     activeSlide(ind);
//     activeDot(ind);
// }

// const nextSlide = () => {
//     if(index == slides.length - 1) {
//         index = 0;
//         prepareCurrentSlide(index);
//     } else {
//         index++;
//         prepareCurrentSlide(index);
//     }
// }

// const prevSlide = () => {
//     if(index == 0) {
//         index = slides.length - 1
//         prepareCurrentSlide(index);
//     } else {
//         index--;
//         prepareCurrentSlide(index);
//     }
// }

// dots.forEach((item, indexDot) => {
//     item.addEventListener('click', () => {
//         index = indexDot;
//         prepareCurrentSlide(index);
//     });
// });

// const interval = setInterval(nextSlide, 2500);

const button = document.querySelectorAll('.btn');
const back = document.querySelectorAll('.button--back');

function toggleOpen() {
    this.parentNode.parentNode.parentNode.parentNode.classList.add('open');
    button.forEach(ele => {
        if (ele !== this) ele.parentNode.parentNode.parentNode.parentNode.classList.add('hide');
    });
}

function toggleClose() {
    this.parentNode.parentNode.parentNode.parentNode.classList.remove('open');
    button.forEach(ele => {
        if (ele !== this) ele.parentNode.parentNode.parentNode.parentNode.classList.remove('hide');
    });
}

button.forEach(ele => ele.addEventListener('click', toggleOpen));
back.forEach(ele => ele.addEventListener('click', toggleClose));


/* Бургер-меню */

const burger = document.querySelector('.header__menu');
const menu = document.querySelector('.header__nav');

if(burger) {
    const menu = document.querySelector('.header__nav');
    burger.addEventListener('click', function(e) {
        burger.classList.toggle('active');
        menu.classList.toggle('show');
        body.classList.toggle('no-scroll');
    });
}

/* Модальное окно */

const modalBtn = document.querySelectorAll('[data-popup]');
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.popup');
const modalBodyMob = document.querySelectorAll('.modal__mobile');
const body = document.body;

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-popup');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.popup__dialog');

        modalContent.addEventListener('click', event =>  {
            event.stopPropagation();
        });
        console.log(modalId);

        modal.classList.toggle('show');
        $this.classList.toggle('active');
        body.classList.toggle('no-scroll');

        setTimeout(function() {
            modalContent.style.transform = 'none';
        }, 10)
    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.popup');

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.popup__dialog');
    modalContent.removeAttribute('style');

    setTimeout(function() {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 100)
} 

/* Swiper */

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width > 1024){
        const swiper = new Swiper('.about__brands', {
            loop: true,
            Mode: true,
            slidesPerView: 6,
        
            autoplay: {
                delay: 5000,
            },
        });
    }
})

new Swiper('.intro__body', {
 // Optional parameters
    loop: true,
    Mode: true,

    autoplay: {
        delay: 60000,
    },

    pagination: {
        el: '[data-slider-dots]',
        type: "bullets",
        clickable: true,
        bulletClass: "dot",
        bulletActiveClass: "dot_active",
        renderBullet: function (index, className) {
            return '<div class="' + className + '"></div>';
        },
    },
});

new Swiper('.news__slider', {
    // Optional parameters
    loop: true,
    Mode: true,
    slidesPerView: 3,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('.news__slider').forEach(function(i) {
    var Swiper = new Swiper (document.querySelector('.news__slider')[i], {
        nextButton: document.querySelector('.swiper-button-prev')[i],
        prevButton: document.querySelector('.swiper-button-next')[i],

        slidesPerView: 2,
    });
});

document.querySelector('.intro__body').forEach(function(i) {
    var Swiper = new Swiper (document.querySelector('.intro__body')[i], {
        swiperPagination: document.querySelector('.swiper-pagination')[i]
    });
});

// jQuery(function($) {
 
//   $('.swiper-object .swiper').each(function(index, value) {
 
//     var mySwiper = new Swiper(value, {
//       autoplay: {
//         delay: 5000,
//       },
//       navigation: {
//         nextEl: value.nextElementSibling.nextElementSibling,
//         prevEl: value.nextElementSibling,
//       },
//       pagination: {
//         el: value.nextElementSibling.nextElementSibling.nextElementSibling,
//         clickable: true,
//       },
//       slidesPerView: 'auto',
//     });
 
//   });
// });
// const dom = {

//     progress: {
//         quiestionNumber: document.getElementById('quiestion-number'),
//         totalQuestions: document.getElementById('total-questions')
//     },

//     quiz: {
//         question: document.getElementById('quiestion'),
//         questionPosition: document.getElementById('quiestion-position'),
//     }
// }

/* Калькулятор */

// const prev = document.getElementById('btn-prev');
// const next = document.querySelectorAll('btn-next');
// const quizes = document.querySelectorAll('.calc__content');
// const values = document.querySelectorAll('.calc__item');

// const activeQuize = n => {
//     for(quize of quizes) {
//         quize.classList.remove('active');
//     }

//     quizes[n].classList.add('active');
// }

// const activeValue = n => {
//     for(value of values) {
//         value.classList.remove('active');
//     }

//     values[n].classList.add('active');
// }

// const prepareCurrentQuize = ind => {
//     activeQuize(ind);
//     activeValue(ind);
// }

// const nextQuize = () => {
//     if(index == quizes.length - 1) {
//         index = 0;
//         prepareCurrentQuize(index);
//     } else {
//         index++;
//         prepareCurrentQuize(index);
//     }
// }

// const prevQuize = () => {
//     if(index == 0) {
//         index = quizes.length - 1
//         prepareCurrentQuize(index);
//     } else {
//         index--;
//         prepareCurrentQuize(index);
//     }
// }

// values.forEach((item, indexValue) => {
//     item.addEventListener('click', () => {
//         index = indexValue;
//         prepareCurrentQuize(index);
//     });
// });

// next.addEventListener('click', nextQuize);