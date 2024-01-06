$(document).ready(function () {
  $(".nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

function scrollUp() {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
}

document.addEventListener("DOMContentLoaded", function () {
  let accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      accordionButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
});
