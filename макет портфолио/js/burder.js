"use strict"

// Меню бургер
const menuLink = document.querySelectorAll('.menu__link');

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const lang = document.querySelector('.lang');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        lang.classList.toggle('_active');
    });  
}

// Закрывает меню бургер при клике на ссылку
if (menuLink.length > 0) {
    menuLink.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.targer;

        if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            lang.classList.remove('_active');
        }
    }
}
