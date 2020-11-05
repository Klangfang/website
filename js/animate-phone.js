document.addEventListener("DOMContentLoaded", function (event) {
  // initial call
  triggerAnimation();

  const content = document.querySelector("#scroll-content");
  // TODO: throttle scrolling
  content.addEventListener("scroll", triggerAnimation);

  // Animate on scroll into viewport
  function triggerAnimation() {
    const section1 = document.querySelector("#section--1");
    const section2 = document.querySelector("#section--2");
    const lastSection = document.querySelector("#section--last");

    // Offset of element from viewport bottom
    const offset = 50;

    if (section1.getBoundingClientRect().bottom + offset < window.innerHeight) {
      section1.classList.add("scrolling");
      section2.classList.add("scrolling");
    } else {
      section1.classList.remove("scrolling");
      section2.classList.remove("scrolling");
    }

    if (lastSection.getBoundingClientRect().top + offset < window.innerHeight) {
      section2.classList.add("last-in-vp");
    } else {
      section2.classList.remove("last-in-vp");
    }
  }
});