function weather() { 
  let city = document.getElementById("city");
  getData(city.value);
}

async function getData(city) {
  let responsive = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89e6763cb86394f164f17f237c0c4f24&units=metric`);

  try {
    if (!responsive.ok) {
      throw new Error(responsive.status);
    }
    let data = await responsive.json();
    showdataToUsers(city, data);
  } catch (error) {
    document.getElementById("output").innerHTML = `<p class="error">Incorrect City Name</p>`;
  }
}

function showdataToUsers(city, data) {
  document.getElementById("output").innerHTML = `
    <h2>Weather in ${city}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Feels Like: ${data.main.feels_like}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}