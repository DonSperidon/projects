
new Swiper('.image-slider',{
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        /*
        // Буллеты
        type: 'bullets',
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
        // Кастомные буллеты 
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        */
        
        // Фракция
        type: 'fraction',
        // Кастомный вывод фракций
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' + 
            '<span class="' + totalClass + '"></span>';
        },
        
       /*
       // Прогрессбар
       type: 'progressbar',
       */
    
    },
    // Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаксивать скролл
        draggable: true
    },
    
    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа 
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания 
    touchAngle: 45, 
    // Курсор перетаксивания
    grabCursor: true, 

    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хешу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление с клавиатуры
    keyboard: {
        // Включить/выключить (возможность управления)
        enabled: true,
        // Включить/выключить 
        // только когда слайдер 
        // в пределах вьюпорта (только когда мы до него доскролили,а не всегда)
        onlyInViewport: true,
        // Включить/выключить 
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором 
        // будет срабатывать прокрутка мышью.   
        eventsTarget: ".image-slider" // если множество одинакомых слайдеров, 
                                      // то крутя мышкой на одном, будут срабатывать другие(в такой ситуации лучше отключить) !!!
    },

    // Автовысота
    autoHeight: true,

    // Количество слайдов для показа ( количество выводимых слайдеров на экран за один раз)
    slidesPerView: 1, // автовысота для всех слайдов, переключаются по одному
    // slidesPerView: auto, + 114-117  строки в style.css

    // Отключение функционала,
    // если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30, //в px

    // Количество пролистываемых слайдов
    slidesPerGroup: 3,

    // Активный слайд по центру
    centeredSlides: true,

    // Стартовый слайд.
    initialSlide: 0,
    
    // Мультирядность
    slidesPerColumn: 2, // для корректной работы отключить автовысоту
    // 119-126 css 
    // в режиме auto не работает с SlidesPerView



    

});

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,