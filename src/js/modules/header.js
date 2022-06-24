/*jshint esversion: 8 */
function header() {
    const menu = document.querySelector('.menu'),
          logo = document.querySelector('.header__logo');
    let scrollPos = window.scrollY;

    const header = document.querySelector('header'),
          problems = document.querySelector('.problems'),
          scrollChange = 100;
    const addScrollClass = () => {
        header.classList.add('header-scroll');
        problems.classList.add('problems-margin');
    };
    const removeScrollClass = () => {
        header.classList.remove('header-scroll');
        problems.classList.remove('problems-margin');
    };
    
    window.addEventListener('scroll', function() {
        if (menu.classList.contains('show')) {
            header.classList.remove('header-scroll');
        } else {
            scrollPos = window.scrollY;
            if (scrollPos >= scrollChange) {
                addScrollClass();
            } else {
                removeScrollClass();
            }
        }
    });

    logo.addEventListener('click', () => {
        removeScrollClass();
    });
}

export default header;