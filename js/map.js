function init() {
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [56.13825369257324,47.27149980396986],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 18
    });

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.8, 37.8] // координаты точки
        }
    });

    var placemark = new ymaps.Placemark([56.13825369257324,47.27149980396986], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/assets/img/place/map.svg',
        iconImageSize: [227, 112],
        iconImageOffset: [-20, -100]
    });

    myMap.geoObjects.add(myGeoObject); 
    myMap.geoObjects.add(placemark); 

    myMap.behaviors.disable('scrollZoom'); 

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init)
