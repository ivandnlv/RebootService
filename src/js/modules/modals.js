function modals() {
    const modals = document.querySelector('.modals'),
          header = document.querySelector('.header'),
          modal = document.querySelector('.modals__consult'),
          modalComplete = document.querySelector('.modals__consult-complete'),
          close = document.querySelectorAll('.modals-close'),
          btn1 = document.querySelector('.problems__btn'),
          btn2 = document.querySelector('.write__form-btn'),
          btn3 = document.querySelector('.services__btn'),
          checklist = document.querySelector('.modals__checklist');

    function hide(element) {
        if(!element.classList.contains('modals-hidden')) {
            element.classList.add('modals-hidden');
        }
    }

    function show(element) {
        element.classList.remove('modals-hidden');
    }


    close.forEach((item) => {
        item.addEventListener('click', () => {
            hide(modal);
            hide(checklist);
            hide(modalComplete);
            hide(modals);
            if (window.scrollY >= 100) {
                header.classList.add('header-scroll');
            }
            document.body.style = '';
        });
    });

    btn1.addEventListener('click', () => {
        show(modals);
        show(modal);
        if (header.classList.contains('header-scroll')){
            header.classList.remove('header-scroll');
        }
        document.body.style.overflow = 'hidden';
    });

    btn3.addEventListener('click', () => {
        show(modals);
        show(checklist);
        if (header.classList.contains('header-scroll')){
            header.classList.remove('header-scroll');
        }
        document.body.style.overflow = 'hidden';
    });


}

export default modals;