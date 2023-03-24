const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(animItem.classList.contains('._anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

$(document).ready(function() {
    $('.reviews__inner').slick({
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
    });

    $('.questions__header').click(function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
    });

    $('.tab__content').not(':first').hide();
    $('.cost__tabs .cost__tab').on('click', function() {
        $('.cost__tabs .cost__tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab__content').hide().eq($(this).index()).fadeIn();
        $('.tab__content').addClass('active');
    }).eq(0).addClass('active');

    $('#tab-1').on('click', function() {
        $('#photo-1').addClass('active')
        $('#photo-2').removeClass('active')
        $('#photo-3').removeClass('active')
        $('#photo-4').removeClass('active')
        $('.cost__content-decor').addClass('_active')
    });

    $('#tab-2').on('click', function() {
        $('#photo-1').removeClass('active')
        $('#photo-2').addClass('active')
        $('#photo-3').removeClass('active')
        $('#photo-4').removeClass('active')
        $('.cost__content-decor').addClass('_active')
    });

    $('#tab-3').on('click', function() {
        $('#photo-1').removeClass('active')
        $('#photo-2').removeClass('active')
        $('#photo-3').addClass('active')
        $('#photo-4').removeClass('active')
        $('.cost__content-decor').addClass('_active')
    });

    $('#tab-4').on('click', function() {
        $('#photo-1').removeClass('active')
        $('#photo-2').removeClass('active')
        $('#photo-3').removeClass('active')
        $('#photo-4').addClass('active')
        $('.cost__content-decor').addClass('_active')
    });

    $('.info__decor-2').addClass('layer')
    $('.info__decorations').parallax()
});

/* Slider */

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.quiz__slider-block');
const dots = document.querySelectorAll('.quiz__col');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }

    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }

    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);