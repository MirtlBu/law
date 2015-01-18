var reviews = [
    {
        name: 'Лариса Ивановна',
        text: 'Позвонила в праздники, перезвонили на следующий день с утра. Все объяснили и растолковали как надо.'
    },
    {
        name: 'Эраст Петрович',
        text: 'Удобный сайт, быстро отвечают и квалифицированно консультируют! Благодарю!'
    },
    {
        name: 'Анонимус',
        text: 'Очень рад, что в России теперь предоставляется бесплатно такая квалифицированная юридическая помощь.'
    },
];

function renderReviewBlock(review) {
    console.log(review);
    return $('<div/>')
        .append($('<div/>', {'class': 'quote'}).text(review.text))
        .append($('<span/>', {'class': 'name'}).text(review.name))
}

var counter = 0;

$('.about').find('.controls').on('click', '.control', function() {

    if($(this).hasClass('control--next')) {
        counter++;
    }
    else if($(this).hasClass('control--prev')) {
        counter--;
    }
    var index = counter%3;
    $('.about__wrap').addClass('hidden');

    setTimeout(function() {
        $('.reviews').find('.quote').text(reviews[index].text);
        $('.reviews').find('.name').text(reviews[index].name);
        $('.about__wrap').removeClass('hidden');
    }, 500)

});





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
