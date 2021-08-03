/* Nav choice of language */
const boxSpeech = document.querySelector(".nav__container--speech");
const tooltipLanguage = document.querySelector(".tooltip--language");

boxSpeech.addEventListener("click", () => {
  tooltipLanguage.classList.toggle("active");
});

/* Menu */
const btnMenu = document.querySelector(".menu-burger");
const menu = document.querySelector(".nav-links");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* Slider */
const imgs = document.querySelectorAll(".slider .slide");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const thumbnails = document.querySelectorAll(".slider--thumbnail img");
let index = 0;

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

document.addEventListener("keydown", keyPressed);

function nextSlide() {
  if (index < 4) {
    imgs[index].classList.remove("active-slide");
    index++;
    imgs[index].classList.add("active-slide");
  } else if (index === 4) {
    imgs[index].classList.remove("active-slide");
    index = 0;
    imgs[index].classList.add("active-slide");
  }
  checkThumbnailsClass();
}

function prevSlide() {
  if (index > 0) {
    imgs[index].classList.remove("active-slide");
    index--;
    imgs[index].classList.add("active-slide");
  } else if (index === 0) {
    imgs[index].classList.remove("active-slide");
    index = 4;
    imgs[index].classList.add("active-slide");
  }
  checkThumbnailsClass();
}

function keyPressed(e) {
  if (e.keyCode === 37) {
    prevSlide();
  } else if (e.keyCode === 39) {
    nextSlide();
  }
}

function checkThumbnailsClass() {
  for (i = 0; i < thumbnails.length; i++) {
    if (thumbnails[i].getAttribute("data-thumb") - 1 === index) {
      thumbnails[i].classList.add("active");
    } else {
      thumbnails[i].classList.remove("active");
    }
  }
}

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].classList.remove("active");
    }
    this.classList.add("active");
    imgs[index].classList.remove("active-slide");
    index = this.getAttribute("data-thumb") - 1;
    imgs[index].classList.add("active-slide");
  });
});

setInterval(() => {
  nextSlide();
}, 15000);
