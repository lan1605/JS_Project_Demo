const btn = document.querySelector(".button"),
  hourHand = document.querySelector(".hand.hour"),
  minuteHand = document.querySelector(".hand.minute"),
  secondHand = document.querySelector(".hand.second");

const updateTime = () => {
  let date = new Date(),
    sec = (date.getSeconds() / 60) * 360,
    min = (date.getMinutes() / 60) * 360,
    h = (date.getHours() / 12) * 360;

  secondHand.style = `transform: rotate(${sec}deg)`;
  minuteHand.style = `transform: rotate(${min}deg)`;
  hourHand.style = `transform: rotate(${h}deg)`;
};
setInterval(updateTime, 1000);
updateTime();
btn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark-mode");
  if (btn.innerHTML === "Dark Mode") {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
});
