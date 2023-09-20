const apiKey = "f912a527087a8cd1d28dee2736455dd4";

const searchBtn = document.querySelector(".search button");
async function handleChangeInfo() {
  const cityName = document.querySelector(".search input").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  var data = await response.json();
  const imgWeather = document.querySelector(".weather img"),
    numberWeather = document.querySelector(".temperature .number");
  imgWeather.src = `./weather-app-img/images/${data.weather[0].main.toLowerCase()}.png`;
  // numberWeather.textContent = Math.round(data.main.temp / 10, 2) + "°C";
  numberWeather.textContent = data.main.temp + "°C";
  document.querySelector(".temperature .city").textContent = data.name;
  document.querySelector(".humidity .number").textContent =
    data.main.humidity + "%";
  document.querySelector(".wind .number").textContent =
    data.wind.speed + "km/h";
}
searchBtn.addEventListener("click", handleChangeInfo);
