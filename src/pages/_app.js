import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/globals.css";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

/* ---- Scroll / reveal animations ---- */
function wrapRevealText() {
  document.querySelectorAll(".revealText").forEach((el) => {
    if (el.dataset.revealReady === "true") return;

    const words = el.textContent.trim().split(/\s+/).filter(Boolean);
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="word"><span class="word-inner">${word}</span></span>`,
      )
      .join(" ");

    el.querySelectorAll(".word-inner").forEach((inner, i) => {
      inner.style.transitionDelay = `${i * 100}ms`;
    });

    el.dataset.revealReady = "true";
  });
}

function checkIfInView() {
  const animationElements = document.querySelectorAll(
    ".animateThis, .revealText",
  );
  const windowHeight = window.innerHeight;
  const windowTopPosition = window.scrollY || window.pageYOffset;
  const windowBottomPosition = windowTopPosition + windowHeight;

  animationElements.forEach((element) => {
    const elementTopPosition =
      element.getBoundingClientRect().top + windowTopPosition + 200;

    if (elementTopPosition <= windowBottomPosition) {
      element.classList.add("in-view");
    } else {
      element.classList.remove("in-view");
    }
  });
}

/* ---- Sticky relocate ---- */
function stickyRelocate() {
  const windowTop = window.scrollY || window.pageYOffset;
  const stickyElement = document.getElementById("sticky");
  const pageBody = document.querySelector(".pageBody");

  if (!stickyElement || !pageBody) return;

  const divTop = stickyElement.getBoundingClientRect().top + windowTop;

  if (windowTop > divTop) {
    pageBody.classList.add("stick");
  } else {
    pageBody.classList.remove("stick");
  }
}

/* ---- Menu collapse (Bootstrap) ---- */
function initMenuCollapse() {
  const myCollapsible = document.getElementById("menu");
  if (!myCollapsible) return () => {};

  const onShown = () => {
    myCollapsible.closest(".pageHeader")?.classList.add("opened");
  };
  const onHide = () => {
    myCollapsible.closest(".pageHeader")?.classList.remove("opened");
  };

  myCollapsible.addEventListener("shown.bs.collapse", onShown);
  myCollapsible.addEventListener("hide.bs.collapse", onHide);

  return () => {
    myCollapsible.removeEventListener("shown.bs.collapse", onShown);
    myCollapsible.removeEventListener("hide.bs.collapse", onHide);
  };
}

/* ---- Testimonial avatars ---- */
function setTestimonialAvatars() {
  document.querySelectorAll(".ti_user").forEach((card) => {
    const nameElement = card.querySelector(".ti_userName");
    const imgElement = card.querySelector(".ti_userImg");
    if (!nameElement || !imgElement) return;
    imgElement.textContent = nameElement.textContent
      .trim()
      .charAt(0)
      .toUpperCase();
  });
}

/* ---- Swipers (call from any section when markup exists) ---- */
export function initProjectSlider(selector = ".projectSlider") {
  const el = document.querySelector(selector);
  if (!el) return null;
  return new Swiper(el, {
    modules: [Navigation],
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 1000,
    slideToClickedSlide: true,
    navigation: { nextEl: ".projNext", prevEl: ".projPrev" },
    breakpoints: {
      576: { slidesPerView: 1.4 },
      768: { slidesPerView: 1.2 },
      992: { slidesPerView: 2 },
    },
  });
}

export function initMarqueStrip(selector = ".marqueStrip") {
  const el = document.querySelector(selector);
  if (!el) return null;
  return new Swiper(el, {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 5000,
    loop: true,
    grabCursor: false,
    allowTouchMove: false,
    autoplay: { delay: 0, disableOnInteraction: false },
    breakpoints: {
      576: { slidesPerView: 5, spaceBetween: 40 },
      992: { slidesPerView: 6, spaceBetween: 80 },
      1200: { slidesPerView: 8, spaceBetween: 100 },
    },
  });
}

export function initTestimSwiper(selector = ".testimSwiper") {
  const el = document.querySelector(selector);
  if (!el) return null;
  return new Swiper(el, {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    autoplay: { delay: 7000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      576: { slidesPerView: 1.2 },
      768: { slidesPerView: 1.5 },
      1200: { slidesPerView: 1.75 },
    },
  });
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    wrapRevealText();
    checkIfInView();
    stickyRelocate();
    setTestimonialAvatars();

    const onScrollOrResize = () => {
      checkIfInView();
      stickyRelocate();
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const cleanupMenu = initMenuCollapse();

    const observer = new MutationObserver(() => {
      wrapRevealText();
      checkIfInView();
      setTestimonialAvatars();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      cleanupMenu();
      observer.disconnect();
    };
  }, []);

  return <Component {...pageProps} />;
}
