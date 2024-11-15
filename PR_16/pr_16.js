document.getElementById('fetchWeatherBtn').addEventListener('click',
    fetchWeather);
    async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '91cb5417800b44a9a79237b00fa650c0';
    const url =
    
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=
    metric`;
    
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = '<p class="loading">Loading...</p>';
    try {
    const response = await fetch(url);
    console.log(response); // Log response
    if (!response.ok) {
    throw new Error('City not found');
    }
    const data = await response.json();
    console.log(data); // Log data
    displayWeather(data);
    } catch (error) {
    console.error(error); // Log error
    weatherInfoDiv.innerHTML = `<p
    
    class="error">${error.message}</p>`;
    
    }
    }
    function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherInfo = `
    
    
    
    <h3>${name}</h3>
    <p>Temperature: ${main.temp}°C</p>
    <p>Condition: ${weather[0].description}</p>
    <img
    
    src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png"
    alt="${weather[0].description}">
    
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
    }