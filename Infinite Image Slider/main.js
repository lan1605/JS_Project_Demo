const carousel = document.querySelector(".carousel"),
  arrowBtns = document.querySelectorAll(".button i"),
  firstCardWidth = document.querySelector(".card").offsetWidth,
  childrenCarousel = [...carousel.children],
  wrapper = document.querySelector(".wrapper");
let isDragging = false,
  startX,
  startScrollLeft,
  cardPreview = Math.round(carousel.offsetWidth / firstCardWidth),
  timeOutId;

childrenCarousel
  .slice(-cardPreview)
  .reverse()
  .forEach((item) => {
    carousel.insertAdjacentHTML("afterbegin", item.outerHTML);
  });
childrenCarousel.slice(0, cardPreview).forEach((item) => {
  carousel.insertAdjacentHTML("beforeend", item.outerHTML);
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragstop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timeOutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();
const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = cardPreview.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  clearTimeout(timeOutId);
  if (!wrapper.matches(":hover")) autoPlay();
};
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragstop);
carousel.addEventListener("scroll", infiniteScroll);
arrowBtns.forEach((item) => {
  item.addEventListener("click", function () {
    carousel.scrollLeft +=
      item.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});
wrapper.addEventListener("mouseenter", () => clearTimeout(timeOutId));
wrapper.addEventListener("mouseleave", autoPlay);
