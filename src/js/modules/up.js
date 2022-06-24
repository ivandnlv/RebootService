function up() {
    const up = document.querySelector('.up'),
          problems = document.querySelector('.problems');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 4000) {
            up.classList.add('showUp');
        } else {
            up.classList.remove('showUp');
        }
    });

    up.addEventListener('click', () => {
        problems.classList.remove('problems-margin');
    });
}

export default up;