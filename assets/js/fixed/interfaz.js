// HEADER FIXED
function headerInit() {
  var header = document.querySelector(".js-header");
  var triggerElement = document.querySelector(".js-header-limit");

  new Waypoint({
    element: triggerElement,
    handler: function (direction) {
      if (direction === "down") {
        header.classList.add("is-fixed");
      } else {
        header.classList.remove("is-fixed");
      }
    },
    offset: 0,
  });
}

window.addEventListener("DOMContentLoaded", () => {
  headerInit();
});

function navInit() {
  const $body = document.querySelector('body');
  const $navToggle = document.getElementById('nav-toggle');
  const $nav = document.getElementById('main-nav');

  function hideNav() {
    if ($navToggle.checked) $navToggle.checked = false;

    $nav.classList.add('is-closing');
    $nav.classList.remove('is-visible');
    $body.classList.remove('nav-open');
  }

  $navToggle.onchange = () => {
    if ($navToggle.checked) {
      $nav.classList.add('is-visible'); // Mostrar nav
      $body.classList.add('nav-open');
    } else {
      hideNav();
    }
  };

  $nav.addEventListener('animationend', (event) => {
    if (event.target === $nav && $nav.classList.contains('is-closing')) {
      $nav.classList.remove('is-closing');
      // Aseguramos que is-visible esté removido solo al cerrar
      $nav.classList.remove('is-visible');
    }
  });
}



navInit();