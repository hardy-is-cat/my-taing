import { attr, getNode } from "../lib/index.js";

// 헤더 스크롤 액션
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.classList.remove("deactive");
    header.classList.add("active");
  } else {
    header.classList.remove("active");
    header.classList.add("deactive");
  }
});

// main-visual swiper
const mainVisual = new Swiper(".main-visual", {
  loop: true,
  speed: 1500,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// main-visual autoplay, pause
const autoplayBtn = getNode(".swiper-button-autoplay");

function handlerAutoplay() {
  console.log(attr(autoplayBtn, "class"));
  mainVisual.autoplay.stop();
}

autoplayBtn.addEventListener("click", handlerAutoplay);

const recommendTaing = new Swiper(
  ".recommend-taing .swiper",
  {
    spaceBetween: 8,
    keyboard: {
      enabled: true,
    },
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 8,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 16,
        slidesPerView: 7,
      },
      1920: {
        spaceBetween: 16,
        slidesPerView: 8,
      },
    },
  }
);

const quickVod = new Swiper(".quick-vod .swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  keyboard: {
    enabled: true,
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 5,
    },
    1920: {
      spaceBetween: 16,
      slidesPerView: 6,
    },
  },
});

const realtimePopular = new Swiper(
  ".realtime-popular .swiper",
  {
    slidesPerView: "auto",
    spaceBetween: 8,
    keyboard: {
      enabled: true,
    },
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 8,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 8,
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 16,
        slidesPerView: 7,
      },
      1920: {
        spaceBetween: 16,
        slidesPerView: 8,
      },
    },
  }
);

const livePopular = new Swiper(".live-popular .swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  keyboard: {
    enabled: true,
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 5,
    },
    1920: {
      spaceBetween: 16,
      slidesPerView: 6,
    },
  },
});

const onlyTaing = new Swiper(".only-taing .swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  keyboard: {
    enabled: true,
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 8,
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 8,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 16,
      slidesPerView: 6,
    },
    1920: {
      spaceBetween: 16,
      slidesPerView: 7,
    },
  },
});

const eventSwiper = new Swiper(".event", {
  slidesPerView: "auto",
  spaceBetween: 8,
  keyboard: {
    enabled: true,
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
