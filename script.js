

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "e061f6e9638591093be54428e3ba3ba3"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        document.getElementById("weatherInfo").innerHTML = "City not found. Please try again.";
        return;
      }
  
      const weatherHtml = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>🌤️ Condition: ${data.weather[0].description}</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      `;
  
      document.getElementById("weatherInfo").innerHTML = weatherHtml;
    } catch (error) {
      document.getElementById("weatherInfo").innerHTML = "Error fetching data. Please try again.";
    }
  }
  
