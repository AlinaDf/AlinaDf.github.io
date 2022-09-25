/* Карта */

let center = [51.15238496825526,71.4762479999999];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 15
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/map/map.svg',
        iconImageSize: [348, 113],
        iconImageOffset: [0, 0]
    });

    map.geoObjects.add(placemark);
}

ymaps.ready(init);

/* Модальное окно */
$(document).ready(function() {
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        let $this = $(this);
        let modalId = $this.data('modal');
    
        $(modalId).addClass('show');
        $("body").addClass('no-scroll')

        setTimeout(function() {
            $(modalId).find('.modal__dialog').css({
                transform: "rotateX(0)"
            });
        }, 200);
    });

    modalClose.on("click", function(event) {
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll')
        }, 200);
    });

    $(".modal").on("click", function(event) {
        let $this = $(this);
        $this.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll')
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

    /* ТАБЫ */
});

$(document).ready(function(event){
    $(".tabs__item").on("click", function(event) {
        event.preventDefault();
    });
});