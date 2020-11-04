document.addEventListener("DOMContentLoaded", function (event) {
  // Helper Function to detect elements in viewport
  const isInViewport = function (el) {
    const bounding = el.getBoundingClientRect();
    const offset = 300;

    return (
      bounding.top < offset &&
      bounding.bottom <= ((window.innerHeight + offset) || (document.documentElement.clientHeight + offset))
    );
  };

  // Mobile
  const screenMobile = document.querySelector(".section-phone-content__image");
  const contentMobile = document.querySelector(".content--mobile");

  contentMobile.addEventListener("scroll", function () {
    if (isInViewport(document.querySelector("#section--1"))) {
      screenMobile.src = "./assets/device_1.png";
    }

    if (isInViewport(document.querySelector("#section--2"))) {
      screenMobile.src = "./assets/device_2.png";
    }

    if (isInViewport(document.querySelector("#section--3"))) {
      screenMobile.src = "./assets/device_2.png";
    }

    if (isInViewport(document.querySelector("#section--4"))) {
      screenMobile.src = "./assets/device_3.png";
    }

    if (isInViewport(document.querySelector("#section--5"))) {
      screenMobile.src = "./assets/device_3.png";
    }

    if (isInViewport(document.querySelector("#section--6"))) {
      screenMobile.src = "./assets/device_4.png";
    }
  });

  // Desktop
  const screenDesktop = document.querySelector(".background__img");
  const contentDesktop = document.querySelector("#scroll-content--desktop");

  contentDesktop.addEventListener("scroll", function () {
    if (isInViewport(document.querySelector(".section--intro"))) {
      screenDesktop.src = "./assets/device_1.png";
    }

    if (isInViewport(document.querySelector(".section--collect"))) {
      screenDesktop.src = "./assets/device_2.png";
    }

    if (isInViewport(document.querySelector(".section--collaborate"))) {
      screenDesktop.src = "./assets/device_3.png";
    }

    if (isInViewport(document.querySelector(".section--edit"))) {
      screenDesktop.src = "./assets/device_4.png";
    }
  });
});