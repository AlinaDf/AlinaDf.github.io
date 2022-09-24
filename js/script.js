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