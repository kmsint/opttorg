// hamburger button click processing
document.querySelector('.menu-icon-wrapper').onclick = function(){

    let menu = document.querySelector('.aside__nav');
    menu.classList.toggle('aside__nav--active');
    document.querySelector('.menu-icon').classList.toggle('menu-icon--active');
};

document.querySelector('.aside__nav').onclick = function(){

    let menu_2 = document.querySelector('.aside__nav');
    menu_2.classList.toggle('aside__nav--active');
    document.querySelector('.menu-icon').classList.toggle('menu-icon--active');
};

document.addEventListener('DOMContentLoaded', () => {
    let toTopBtn = document.querySelector('.to-up-wrapper');

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            toTopBtn.style.display = 'block'
        } else {
            toTopBtn.style.display = 'none'
        }
    }

    // плавный скролл наверх 
    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});
