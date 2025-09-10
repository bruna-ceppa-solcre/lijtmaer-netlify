function cardCarouselCarouselInit() {

  const cardCarouselCarouselClass = 'js-card-slider';
  const cardCarouselCarouselAr = document.querySelectorAll(`.${cardCarouselCarouselClass}`)
  const cardCarouselCarouselSliders = []

  cardCarouselCarouselAr.forEach(($el, i) => {

    let carouselId = null;

    if (!$el.getAttribute('id')) {
      carouselId = `${cardCarouselCarouselClass}-${i}`;
      $el.setAttribute('id', carouselId)
    } else {
      carouselId = $el.getAttribute('id')
    }

    const $carousel = document.getElementById(carouselId);

    cardCarouselCarouselSliders[i] = tns({
      container: `#${carouselId} .js-carousel`,
      items: 1,
      edgePadding: 0,
      gutter: 0,
      autoHeight: false,
      center: false,
      autoplayButtonOutput: false,
      controls: false,
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


  }) // foreach cardCarouselCarouselAr

} // cardCarouselCarouselInit

cardCarouselCarouselInit();
