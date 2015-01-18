$(window).load(function() {
    $('.slider').flexslider({
        selector: '.slides > li',
        animation: 'slide',
        itemWidth: '1170',
        slideshow: false,
        controlNav: false,
        animationSpeed: 1000,
        slideshowSpeed: 8000
    });
    $('.crew > .grid').flexslider({
        selector: '.crew__content > li',
        animation: "slide",
        itemWidth: 290,
        slideshow: false,
        controlsContainer: '.crew .controls',
        controlNav: false,
        move: 1,
        animationSpeed: 1000,
        slideshowSpeed: 3000
    });
});


ymaps.ready(init);
var myMap, myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 14
    });
    myPlacemark = new ymaps.Placemark([55.76, 37.64],
        { content: 'Москва!', balloonContent: 'ул. Старая, 34/2' },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon-pin.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-3, -42]
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('typeSelector').remove('mapTools').remove('searchControl').remove('trafficControl');

}
