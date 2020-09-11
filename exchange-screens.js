document.addEventListener("DOMContentLoaded", function (event) {
  const content = document.querySelector("#scroll-content--desktop");
  let screen = document.querySelector(".background__img");
  const sectionCollect = document.querySelector(".section--collect");
  const sectionCollaborate = document.querySelector(".section--collaborate");
  const sectionEdit = document.querySelector(".section--edit");

  content.addEventListener("scroll", function () {
    // Offset of element from viewport top
    const offset = 100;

    let sectionCollectTop = sectionCollect.getBoundingClientRect().top + offset;
    let sectionCollaborateTop = sectionCollaborate.getBoundingClientRect().top + offset;
    let sectionEditTop = sectionEdit.getBoundingClientRect().top + offset;

    screen.src = "./assets/device_1.png";

    if (sectionCollectTop < window.innerHeight && sectionCollectTop > 0) {
      screen.src = "./assets/device_2.png";
    }
    if (sectionCollaborateTop < window.innerHeight && sectionCollaborateTop > 0) {
      screen.src = "./assets/device_3.png";
    }
    if (sectionEditTop < window.innerHeight && sectionEditTop > 0) {
      screen.src = "./assets/device_4.png";
    }
  }, false);
});