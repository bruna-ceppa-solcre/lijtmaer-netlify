function relatedCarouselCarouselInit() {
  const relatedCarouselCarouselClass = "js-related-slider";
  const relatedCarouselCarouselAr = document.querySelectorAll(
    `.${relatedCarouselCarouselClass}`
  );
  const relatedCarouselCarouselSliders = [];

  relatedCarouselCarouselAr.forEach(($el, i) => {
    let carouselId = null;

    if (!$el.getAttribute("id")) {
      carouselId = `${relatedCarouselCarouselClass}-${i}`;
      $el.setAttribute("id", carouselId);
    } else {
      carouselId = $el.getAttribute("id");
    }

    const $carousel = document.getElementById(carouselId);

    relatedCarouselCarouselSliders[i] = tns({
      container: `#${carouselId} .js-carousel`,
      items: 1.1,
      gutter: 15,
      autoHeight: false,
      center: false,
      autoplayButtonOutput: false,
      controls: false,
      controlsText: ["", ""],
      nav: false,
      loop: false,
      mouseDrag: true,
      responsive: {
        980: {
          items: 4,
          gutter: 20,
        },
      },
      onInit: function () {
        $carousel.classList.remove("js-carousel__notInit");
        $carousel.querySelector(".tns-nav").tabIndex = -1;
      },
    });

    //   // Keep existing control logic for backward compatibility
    //   const $controls = document.querySelectorAll(`#${carouselId} .js-slider-btns`);

    //   $controls.forEach(($control) => {

    //       $control.addEventListener('click', function () {
    //           const controlIndex = $control.getAttribute('data-controls');
    //           slider.goTo(controlIndex);
    //       });

    //   });
  }); // foreach modelsCarouselCarouselAr
} // modelsCarouselCarouselInit

relatedCarouselCarouselInit();
