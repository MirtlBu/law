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

var counter = 0;

var tab_content = [
    'Чаще всего, после того, как клиентом получена юридическая консультация бесплатно по телефону или онлайн, следующим этапом становится платная услуга, наш клиент начинает поиски помощника. Естественно, возникает закономерный вопрос – какова выгода компании от оказания бесплатной помощи?',
    'Чтобы гарантированно получить ответ, вопрос нужно задать в строгой и содержательной форме. На вопросы, состоящие из одного предложения мы не отвечаем. Исключение составляют вопросы из регионов, где действуют наши представительства: Москва и Санкт-Петербург.',
    'Юридическая консультация бесплатно онлайн – это распространенный и развернутый ответ на вопрос, сформулированный в вашей заявке, в которой вы описываете подробно ситуацию и оставляете контактные данные для связи с вами.'
];

var charts = [
    [90, 55, 78, 39],
    [45, 80, 37, 90],
    [70, 50, 90, 66]
];

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

$('.services').find('.tab-nav').on('click', 'li', function(e) {
    e.preventDefault();
    $('.services').find('.tab-nav').find('li').removeClass('tab--active');
    $(this).addClass('tab--active');
    var index = $(this).attr('data-index');
    $('.tab-nav__content').html('<p>' + tab_content[index] + '</p>');
    $('.result').find('.inner').each(function(i) {
        // $(this).removeClass('tab-0 tab-1 tab-2');
        // $(this).addClass('tab-' + index);
        $(this).text(charts[index][i] + '%').closest('.outer').width(charts[index][i] - 30 + '%');
        console.log(charts[index][i] + '%');
    })
})


$(document).ready(function() {
    $('.slider__wrap').flexslider({
        selector: '.slides > li',
        animation: 'slide',
        controlNav: false,
        animationSpeed: 1000,
        slideshow: false,
        controlsContainer: '.slider .controls',
    });

    $('.crew > .grid').flexslider({
        selector: '.crew__content > li',
        animation: "slide",
        itemWidth: 275,
        itemMargin: 23,
        slideshow: false,
        controlNav: false,
        move: 1,
        controlsContainer: '.crew .controls',
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
