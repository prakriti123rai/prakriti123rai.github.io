// Function to fetch weather data from OpenWeatherMap API
async function fetchWeather(city) {
    const apiKey = 'c52d808ed74ee9dcfce058c7cd3ffc0c'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Function to update weather information on the webpage
function updateWeatherInfo(weatherData) {
    const cityElement = document.querySelector('.city');
    const dateElement = document.querySelector('.date');
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const temperatureRangeElement = document.querySelector('.temperature-range');

    if (weatherData) {
        cityElement.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        const currentDate = new Date();
        dateElement.textContent = currentDate.toDateString();
        temperatureElement.textContent = `${weatherData.main.temp} °C`;
        descriptionElement.textContent = weatherData.weather[0].description;
        temperatureRangeElement.textContent = `${weatherData.main.temp_min} °C / ${weatherData.main.temp_max} °C`;
    } else {
        cityElement.textContent = 'City not found';
        dateElement.textContent = '';
        temperatureElement.textContent = '';
        descriptionElement.textContent = '';
        temperatureRangeElement.textContent = '';
    }
}

// Event listener for the input field to fetch weather data when the user submits the city
document.getElementById('input').addEventListener('change', async (event) => {
    const city = event.target.value;
    const weatherData = await fetchWeather(city);
    updateWeatherInfo(weatherData);
});
