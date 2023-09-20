const btnList = document.querySelectorAll("button");
const cardList = document.querySelectorAll(".card");

const btnActive = (e) => {
  btnList.forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
  cardList.forEach((item) => {
    if (
      e.target.dataset.name === item.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};
btnList.forEach((btn) => {
  btn.addEventListener("click", btnActive);
});
