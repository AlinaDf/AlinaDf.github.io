let center = [51.147919,71.477519];

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 15
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/map/map.png',
        iconImageSize: [348, 113],
        iconImageOffset: [0, 0]
    });

    map.geoObjects.add(placemark);
}

ymaps.ready(init);