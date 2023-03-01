const menu = document.getElementById("menu");
const navList = document.getElementById("nav-list");

//navbar for mobile
menu.addEventListener("click", () => {
  console.log("hi");
  if (navList.classList.contains("hide")) {
    navList.classList.remove("hide");
    navList.classList.add("show");
  } else {
    navList.classList.add("hide");
    navList.classList.remove("show");
  }
});

//top section carousel made by Arpana and Sneha
var swiper = new Swiper(".topSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// top section ends

//collection section made by Ashutosh and Deepak
var swiper = new Swiper(".plantSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
//collection ends

//client section made by Satyabrata and Sabir
var swiper = new Swiper(".clientSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 110,
    },
  },
});
//client section ends