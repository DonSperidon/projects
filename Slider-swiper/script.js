
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
});

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,