document.addEventListener("DOMContentLoaded", () => {
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherCart = document.querySelector("#weather-cart");
        const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherCart.innerHTML = `
          <h2 class="sub-title">The weather in the city of <span class ="city">&#9730; ${data.name} &#9730;</span></h2>
          <img src = "${icon}" class = "img">
          <p class = "text">Weather: <span class ="txt">${data.weather[0].description}</span></p>
          <p class = "text">Temperature: <span class ="txt">${data.main.temp}&deg</span></p>
          <p class = "text">Pressure: <span class ="txt">${data.main.pressure} hPa</span></p>
          <p class = "text">Humidity: <span class ="txt">${data.main.humidity} %</span></p>
          <p class = "text">Wind Speed: <span class ="txt">${data.wind.speed} m/s</span></p>
          <p class = "text">wind direction: <span class ="txt">${data.wind.deg} deg.</span></p>
          `;
      })
      .catch((error) => {
        console.error(error);
      });
  });
  