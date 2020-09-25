document.addEventListener("DOMContentLoaded", function (event) {
  const content = document.querySelector("#scroll-content--desktop");
  const contentMobile = document.querySelector(".content--mobile");
  let screen = document.querySelector(".background__img");
  let screenMobile = document.querySelector(".section-phone-content__image");
  const sectionCollect = document.querySelector(".section--collect");
  const sectionCollectMobile = document.querySelector(".section--collect-mobile");
  const sectionCollaborate = document.querySelector(".section--collaborate");
  const sectionCollaborateMobile = document.querySelector(".section--collaborate-mobile");
  const sectionEdit = document.querySelector(".section--edit");
  const sectionEditMobile = document.querySelector(".section--edit-mobile");

  contentMobile.addEventListener("scroll", function () {
    // Offset of element from viewport top
    const offset = 100;

    let sectionCollectTopMobile = sectionCollectMobile.getBoundingClientRect().top + offset;
    let sectionCollaborateTopMobile = sectionCollaborateMobile.getBoundingClientRect().top + offset;
    let sectionEditTopMobile = sectionEditMobile.getBoundingClientRect().top + offset;

    screenMobile.src = "./assets/device_1.png";

    if (sectionCollectTopMobile < window.innerHeight && sectionCollectTopMobile > 0) {
      screenMobile.src = "./assets/device_2.png";
    }

    if (sectionCollaborateTopMobile < window.innerHeight && sectionCollaborateTopMobile > 0) {
      screenMobile.src = "./assets/device_3.png";
    }

    if (sectionEditTopMobile < window.innerHeight && sectionEditTopMobile > 0) {
      screenMobile.src = "./assets/device_4.png";
    }
  }, false);

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