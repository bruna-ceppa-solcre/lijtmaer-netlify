function dialcodeInit() {
  const links = document.querySelectorAll(".c-dialcode__link");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const dialcode = this.closest(".c-dialcode");
      const labelText = submenu.querySelector(".c-dialcode__text");
      const toggle = submenu.querySelector(".c-dialcode__toggle");

      labelText.textContent = this.textContent;
      toggle.checked = false;
    });
  });
}

dialcodeInit();
