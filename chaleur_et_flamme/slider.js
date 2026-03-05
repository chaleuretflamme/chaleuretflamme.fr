

/* ===== HERO SLIDER MANUEL ===== */
const heroSlides = document.querySelector(".hero-slides");
const heroImages = document.querySelectorAll(".hero-slides img");
const heroNext = document.querySelector(".hero-next");
const heroPrev = document.querySelector(".hero-prev");

let heroIndex = 0;

if (heroSlides && heroNext && heroPrev) {
  function updateHeroSlider() {
    heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
  }

  heroNext.addEventListener("click", () => {
    if (heroIndex < heroImages.length - 1) {
      heroIndex++;
    } else {
      heroIndex = 0;
    }
    updateHeroSlider();
  });

  heroPrev.addEventListener("click", () => {
    if (heroIndex > 0) {
      heroIndex--;
    } else {
      heroIndex = heroImages.length - 1;
    }
    updateHeroSlider();
  });
}


/* ===== SLIDER CLASSIQUE ===== 
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

if (slides && nextBtn && prevBtn) {
  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = images.length - 1;
    }
    updateSlider();
  });
}
*/