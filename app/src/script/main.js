let navMenu = document.querySelector('.nav__menu');
let openMenu = document.querySelector('.open');
let openClose = document.querySelector('.open__close');

navMenu.addEventListener('click', () => {
    openMenu.classList.add('active')
});

openClose.addEventListener('click', () => {
    openMenu.classList.remove('active')
});

const swiper = new Swiper('.models__slider', {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,

    navigation: {
        prevEl: "models__slider-button-prev",
        nextEl: "models__slider-button-next",
    },

    pagition: {
        el: "models__slider-pagition",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + "</span>"
        },
    },

})

let headerItemLang = document.querySelectorAll('.header__item-lang');
for (let i = 0; i < headerItemLang.length; i++) {
    headerItemLang[i].addEventListener('click', () => {
        for (let j = 0; j < headerItemLang.length; j++) {
            headerItemLang[j].classList.remove('active');
        }

        headerItemLang[i].classList.add('active');
    })
}

let headerLink = document.querySelectorAll('.header__link');
for (let i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener('click' , () => {
        for (let j = 0; j < headerLink.length; j++) {
            headerLink[j].classList.remove('active');
        }

        headerLink[i].classList.add('active');
    })
}

let headerLinkSearch = document.querySelector('.header__link-search');
let headerForm = document.querySelector('.header__form');
let headerFormClose = document.querySelector('.header__form-close');

headerLinkSearch.addEventListener('click', () => {
    headerForm.classList.add('active');
})

headerFormClose.addEventListener('click', () => {
    headerForm.classList.remove('active');
})