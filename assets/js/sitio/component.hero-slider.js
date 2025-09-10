function heroCarouselCarouselInit() {

  const heroCarouselCarouselClass = 'js-hero-slider';
  const heroCarouselCarouselAr = document.querySelectorAll(`.${heroCarouselCarouselClass}`)
  const heroCarouselCarouselSliders = []

  heroCarouselCarouselAr.forEach(($el, i) => {

    let carouselId = null;

    if (!$el.getAttribute('id')) {
      carouselId = `${heroCarouselCarouselClass}-${i}`;
      $el.setAttribute('id', carouselId)
    } else {
      carouselId = $el.getAttribute('id')
    }

    const $carousel = document.getElementById(carouselId);

    heroCarouselCarouselSliders[i] = tns({
      container: `#${carouselId} .js-carousel`,
      items: 1,
      edgePadding: 0,
      gutter: 10,
      autoHeight: false,
      center: false,
      autoplayButtonOutput: false,
      controls: true,
      controlsText: ['', ''],
      nav: true,
      navPosition: 'bottom',
      mouseDrag: true,
      loop: false,
      onInit: function () {
        $carousel.classList.remove('js-carousel__notInit');
        $carousel.querySelector('.tns-nav').tabIndex = -1;
      }
    });


    const $images = $el.querySelectorAll('.js-hero-carrusel-img');

    heroCarouselCarouselSliders[i].events.on('indexChanged', (info) => {

      const currentIndex = info.displayIndex - 1; 

      $images.forEach(img => img.classList.remove('is-visible'));

      if ($images[currentIndex]) {
        $images[currentIndex].classList.add('is-visible');
      }
    });


    //   const $controls = document.querySelectorAll(`#${carouselId} .js-slider-btns`);

    //   $controls.forEach(($control) => {

    //       $control.addEventListener('click', function () {
    //           const slider = heroCarouselCarouselSliders[i];
    //           const controlIndex = $control.getAttribute('data-controls');
    //           slider.goTo(controlIndex);
    //       });

    //   });

  }) // foreach heroCarouselCarouselAr

} // heroCarouselCarouselInit

heroCarouselCarouselInit();
