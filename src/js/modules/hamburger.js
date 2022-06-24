function hamburger() {
    const hamburger = document.querySelector('.header__hamburger'),
          header = document.querySelector('.header'),
          menu = document.querySelector('.menu'),
          overlay = document.querySelector('.overlay'),
          logo = document.querySelector('.header__logo'),
          body = document.querySelector('body');
    
    hamburger.addEventListener('click', () => {
        if (menu.classList.contains('hidden')) {
            menu.classList.add('show');
            menu.classList.remove('hidden');
            overlay.classList.add('overlay-show');
            overlay.classList.remove('overlay-hidden');
            logo.classList.add('header__logo-menu');
            hamburger.classList.add('header__hamburger-menu');
            header.classList.remove('header-scroll');
            body.style.overflow = 'hidden';
        } else {
            menu.classList.remove('show');
            menu.classList.add('hidden');
            overlay.classList.remove('overlay-show');
            overlay.classList.add('overlay-hidden');
            logo.classList.remove('header__logo-menu');
            hamburger.classList.remove('header__hamburger-menu');
            body.style = '';
        }
    });
    overlay.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            menu.classList.add('hidden');
            overlay.classList.remove('overlay-show');
            overlay.classList.add('overlay-hidden');
            logo.classList.remove('header__logo-menu');
            hamburger.classList.remove('header__hamburger-menu');
            body.style = '';
        }
    });
}

export default hamburger;