// hamburger button click processing
document.querySelector('.menu-icon-wrapper').onclick = function(){
    let menu = document.querySelector('.aside__nav');
    menu.classList.toggle('aside__nav--active');
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

// меню по нажатию на гамбургер

// let button = document.querySelector('.menu-icon-wrapper'); //ищем кнопку
// let menu = document.querySelector('.aside__nav'); //ищем в DOM элемент с классом навигации, которая скрыта за бургер


// button.onclick = () => { //накидываем на кнопку обработчик событий по клику.
//     // тут добавляешь класс к меню, который будет открывать это меню
// };
