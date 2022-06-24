function animations() {
    const workItems = document.querySelectorAll('.work__item');
    const aboutItems = document.querySelectorAll('.about__features-item');
    const aboutText = document.querySelector('.about__text');
    const reviewsItems = document.querySelectorAll('.reviews__item');
    const services = document.querySelector('.services__container');
    const teamQuote = document.querySelector('.team__quote'),
          teamText = document.querySelector('.team__text');
    const contactsVideo = document.querySelector('.contacts__video');

    const clientWidth = document.body.clientWidth;

    if (clientWidth > 992) {
        window.addEventListener('scroll', () => { 
            let currentScroll = window.scrollY;
            if (currentScroll > 300) {
                workItems.forEach((item, i) => {
                    item.classList.add('animate__animated');
                    if (i < 2 || i > 3) {
                        item.classList.add('animate__fadeInRight');
                    } else {
                        item.classList.add('animate__fadeInLeft');
                    }
                });
            } 
            if (currentScroll > 1100) {
                aboutText.classList.add('animate__animated', 'animate__fadeInLeft');
                aboutItems.forEach(item => {
                    item.classList.add('animate__animated', 'animate__fadeInRight');
                });
            }
            if (currentScroll > 1800) {
                reviewsItems.forEach(item => {
                    item.classList.add('animate__animated', 'animate__fadeInRight');
                });
            }
            if (currentScroll > 3000) {
                services.classList.add('animate__animated','animate__fadeInUp');
            }
            if (currentScroll > 4400) {
                teamQuote.classList.add('animate__animated', 'animate__fadeInDown');
                teamText.classList.add('animate__animated', 'animate__fadeInLeft')
            }
            if (currentScroll > 5700) {
               contactsVideo.classList.add('animate__animated', 'animate__fadeInUp')
            }
        }); 
    }
}

export default animations;