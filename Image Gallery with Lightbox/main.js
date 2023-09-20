const imgItemList = document.querySelectorAll(".img-item"),
  lightbox = document.querySelector(".light-box"),
  section = document.querySelector(".section");

imgItemList.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (!lightbox) {
      const item = e.target.parentNode,
        logo = item.querySelector(".item-logo").textContent,
        name = item.querySelector(".item-name").textContent,
        follow = item.querySelector(".item-follower").textContent;
      const lightBox = document.createElement("div");
      lightBox.className = "light-box";
      lightBox.innerHTML = `<div class="light-box--content">
        <div class="light-box--close">
          <i class="fa fa-xmark"></i>
        </div>
        <div class="light-box--header">
          <div class="light-box--author">
            <div class="light-box--logo">${logo}</div>
            <div class="light-box--info">
              <p class="light-box--name">${name}</p>
              <div class="light-box--follow">${follow}</div>
            </div>
          </div>
          <div class="light-box--action">
            <i class="fa fa-heart"></i>
            <i class="fa fa-download"></i>
          </div>
        </div>
        <div class="light-box--img">
        <img src="${e.target.getAttribute("src")}" alt="" srcset="" />
        </div>
      </div>`;
      section.insertAdjacentElement("afterbegin", lightBox);
      const closeBtn = document.querySelector(".light-box--close");
      closeBtn.addEventListener("click", () => {
        section.removeChild(lightBox);
      });
      lightBox.addEventListener("click", () => {
        section.removeChild(lightBox);
      });
    }
  });
});
