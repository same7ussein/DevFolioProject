var typingEffect = new Typed(".typed", {
  strings: ["Designer", "Developer", "Freelancer", "Photographer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  smartBackspace: false,
});

// fixed button
document.addEventListener("DOMContentLoaded", function () {
  var mybutton = document.getElementById("fixedBtn");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      mybutton.classList.add("visible");
    } else {
      mybutton.classList.remove("visible");
    }
  };
});

// 

(function ($bs) {
  const CLASS_NAME = "has-child-dropdown-show";
  $bs.Dropdown.prototype.toggle = (function (_orginal) {
    return function () {
      document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
        e.classList.remove(CLASS_NAME);
      });
      let dd = this._element
        .closest(".dropdown")
        .parentNode.closest(".dropdown");
      for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
        dd.classList.add(CLASS_NAME);
      }
      return _orginal.call(this);
    };
  })($bs.Dropdown.prototype.toggle);

  document.querySelectorAll(".dropdown").forEach(function (dd) {
    dd.addEventListener("hide.bs.dropdown", function (e) {
      if (this.classList.contains(CLASS_NAME)) {
        this.classList.remove(CLASS_NAME);
        e.preventDefault();
      }
      if (
        e.clickEvent &&
        e.clickEvent
          .composedPath()
          .some(
            (el) => el.classList && el.classList.contains("dropdown-toggle")
          )
      ) {
        e.preventDefault();
      }
      e.stopPropagation(); 
    });
  });
})(bootstrap);
