function sliders() {
  function createPrev(parentName) {
    return `
            <button class="btn__prev ${parentName}__prev">
                <svg viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00012 13.2925L1.00012 7.29248L7.00012 1.29248" stroke="#E2001A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `;
  }
  function createNext(parentName) {
    return `
            <button class="btn__next ${parentName}__next">
                <svg viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00012 13.2925L1.00012 7.29248L7.00012 1.29248" stroke="#E2001A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `;
  }
  $(document).ready(function () {
    $('.orders__item').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      appendArrows: $('.orders__btns'),
      prevArrow: createPrev('.order'),
      nextArrow: createNext('.order'),
      dots: true,
      dotsClass: 'orders__circles',
      appendDots: $('.orders__container'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 572,
          settings: {
            autoplay: true,
            slidesToShow: 1,
            initialSlide: 0,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            draggable: false,
          },
        },
      ],
    });
  });

  //team

  $(document).ready(function () {
    $('.team__slider-item').slick({
      infinite: true,
      appendArrows: $('.team__slider-btns'),
      prevArrow: `
            <button class="slider__prev team__prev">
                <svg viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg">
                    <rect x="48" y="48.707" rx="23" transform="rotate(-180 48 48.707)"/>
                    <path d="M21 30.707L27 24.707L21 18.707" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>`,
      nextArrow: `
            <button class="slider__next team__next">
                <svg viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg">
                    <rect x="48" y="48.707" rx="23" transform="rotate(-180 48 48.707)"/>
                    <path d="M21 30.707L27 24.707L21 18.707" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
            </button>
            `,
      dots: true,
      dotsClass: 'team__circles',
      appendDots: $('.team__wrapper'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            autoplay: true,
          },
        },
        {
          breakpoint: 572,
          settings: {
            slidesToShow: 1,
            initialSlide: 0,
            autoplay: true,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            draggable: false,
          },
        },
      ],
    });
  });
  $('.team__slider-item').slick('refresh');
  //Gift Slider

  const width = document.body.clientWidth;

  $(document).ready(function () {
    $('.gift__slide').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      appendArrows: $('.gift__btns'),
      prevArrow: createPrev('.gift'),
      nextArrow: createNext('.gift'),
      dots: true,
      dotsClass: 'gift__circles',
      appendDots: $('.gift__slider'),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 992,
          settings: 'unslick',
        },
        {
          breakpoint: 572,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  });

  //Work Slider
  if (width <= 572) {
    $(document).ready(function () {
      $('.work__wrapper').slick({
        arrows: false,
        dots: true,
        dotsClass: 'work__circles',
        appendDots: $('.work'),
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    });
  }
  //Reviews Slider
  if (width <= 992) {
    $(document).ready(function () {
      $('.reviews__slide').slick({
        arrows: false,
        dots: true,
        dotsClass: 'reviews__circles',
        appendDots: $('.reviews__wrapper'),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              autoplay: true,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 572,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  }
}

export default sliders;
