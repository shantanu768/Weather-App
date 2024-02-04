const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee47e4fcf3mshc3767ca60e40978p11a0ecjsn2bd367074a3e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  fetch(`${url}?city=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById("cityName").innerText = city;
      document.getElementById("cloud_pct").innerText = response.cloud_pct;
      document.getElementById("temp").innerText = response.temp;
      document.getElementById("feels_like").innerText = response.feels_like;
      document.getElementById("humidity").innerText = response.humidity;
      document.getElementById("min_temp").innerText = response.min_temp;
      document.getElementById("max_temp").innerText = response.max_temp;
      document.getElementById("wind_speed").innerText = response.wind_speed;
      document.getElementById("wind_degrees").innerText = response.wind_degrees;
      document.getElementById("sunrise").innerText = response.sunrise;
      document.getElementById("sunset").innerText = response.sunset;
    })
    .catch((err) => console.error(err));
};

const weatherForm = document.getElementById("weatherForm");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityInput = document.getElementById("city");
  getWeather(cityInput.value);
});
getWeather("Delhi");