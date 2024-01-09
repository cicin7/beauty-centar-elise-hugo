document.addEventListener("DOMContentLoaded", function () {
  const slide1 = document.querySelector(".slide-1");
  const slide2 = document.querySelector(".slide-2");
  const slide3 = document.querySelector(".slide-3");

  let currentSlide = 1;

  function nextSlide() {
    if (currentSlide === 1) {
      slide1.style.display = "none";
      slide2.style.display = "flex";
    } else if (currentSlide === 2) {
      slide2.style.display = "none";
      slide3.style.display = "flex";
    } else {
      slide3.style.display = "none";
      slide1.style.display = "flex";
    }
    currentSlide = (currentSlide % 3) + 1;
  }

  setInterval(nextSlide, 4000);
});

const icons = document.querySelectorAll(".dropdown--wrap");
const dropdownDescriptions = document.querySelectorAll(
  ".dropdown--description"
);

function toggleDropdown(event) {
  const iconTwo = event.currentTarget.querySelector(".icon--two");
  const iconIndex = Array.from(icons).indexOf(event.currentTarget);
  const description = dropdownDescriptions[iconIndex];

  if (description.style.height === "0px" || description.style.height === "") {
    iconTwo.style.transform = "rotate(0deg)";
    description.style.height = description.scrollHeight + "px";
  } else {
    iconTwo.style.transform = "rotate(90deg)";
    description.style.height = "0px";
  }
}

icons.forEach((icon) => {
  icon.addEventListener("click", toggleDropdown);
});

// swiper
var swiper = new Swiper(".swiper", {
  grabCursor: true,
  autoplay: true,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
});

// animation
function addAnimationClassX(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translateX");
    }
  });
}

function addAnimationClassY(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translateY");
    }
  });
}

const translateY = new IntersectionObserver(addAnimationClassY);
const translateX = new IntersectionObserver(addAnimationClassX);

const right = document.querySelectorAll(".right-animation");
const left = document.querySelectorAll(".left-animation");
const bottom = document.querySelectorAll(".bottom-animation");

right.forEach((target) => {
  translateX.observe(target);
});

left.forEach((target) => {
  translateX.observe(target);
});

bottom.forEach((target) => {
  translateY.observe(target);
});
