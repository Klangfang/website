document.addEventListener("DOMContentLoaded", function (event) {
  // initial call
  triggerAnimation();

  const content = document.querySelector(".content");
  // TODO: throttle scrolling
  content.addEventListener("scroll", triggerAnimation);

  // Animate on scroll into viewport
  function triggerAnimation() {
    const rect = document.querySelector(".section--1");
    const rect2 = document.querySelector(".section--2");
    const lastRect = document.querySelector(".section--last");

    // Offset of element from viewport bottom
    const offset = 100;

    if (rect.getBoundingClientRect().bottom + offset < window.innerHeight) {
      rect.classList.add("scrolling");
      rect2.classList.add("scrolling");
    } else {
      rect.classList.remove("scrolling");
      rect2.classList.remove("scrolling");
    }

    if (lastRect.getBoundingClientRect().top + offset < window.innerHeight) {
      rect2.classList.add("last-in-vp");
    } else {
      rect2.classList.remove("last-in-vp");
    }
  }
});