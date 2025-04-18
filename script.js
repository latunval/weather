const btn = document.getElementById('search');
const input = document.getElementById('text');
const API_KEY = "bbba9737cd874e3735a415a6bcd44a17";

let area = document.getElementById('city');
let temp = document.getElementById('tem');
let des = document.getElementById('des');
let humidity = document.getElementById('hum');

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    area.innerHTML = data.name;
    temp.innerHTML = data.main.temp + " °C";
    des.innerHTML = data.weather[0].description;
    humidity.innerHTML = data.main.humidity + "%";

    console.log(`Weather in ${city}:`);
    console.log("Temperature:", data.main.temp, "°C");
    console.log("Description:", data.weather[0].description);
    console.log("Humidity:", data.main.humidity, "%");

  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Failed to fetch weather data.");
  }
}

// Add event listener outside the async function
btn.addEventListener('click', function () {
  const city = input.value.trim();
  if (!city) {
    alert('Enter your city');
    return;
  }

  getWeather(city);
});
