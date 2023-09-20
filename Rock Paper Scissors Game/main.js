const gameContent = document.querySelector(".content"),
  userResult = document.querySelector(".user-result img"),
  cpuResult = document.querySelector(".cpu-result img"),
  result = document.querySelector(".text"),
  optionImgs = document.querySelectorAll(".option-image"),
  options = document.querySelector(".options");

optionImgs.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    optionImgs.forEach((item) => item.classList.remove("active"));
    img.classList.add("active");
    result.textContent = "Vui lòng đợi....";
    gameContent.classList.add("start");
    options.style = "pointer-events: none";
    setTimeout(() => {
      gameContent.classList.remove("start");
      let imgSrc = e.target.querySelector("img").src;
      userResult.src = imgSrc;
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImgs = [
        "./images/rock.png",
        "./images/paper.png",
        "./images/scissors.png",
      ];
      cpuResult.src = cpuImgs[randomNumber];
      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];
      let outcomes = {
        RR: "Hòa",
        RP: "Máy thắng!!",
        RS: "Người thắng!!",
        PR: "Người thắng!!",
        PP: "Hòa",
        PS: "Máy thắng!!",
        SR: "Máy thắng!!",
        SP: "Người thắng!!",
        SS: "Hòa",
      };
      let outcomesValue = outcomes[userValue + cpuValue];

      result.textContent = outcomesValue;
      options.style = "";
    }, 2500);
  });
});
