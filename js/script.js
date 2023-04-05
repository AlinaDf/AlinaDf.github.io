const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    brekpoints: {
        769: {
            slidesPerView: 2,
        }
    }
});