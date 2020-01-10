import getWeather from './weatherApi';
import weatherGiphy from './giphy';

const output = async function(weatherData) {
    const kelvin = parseFloat(weatherData.main.temp).toFixed(2);

    document.getElementById('celsius').innerHTML = 'Celsius: ' + (kelvin - 273.15).toFixed(1);
    document.getElementById('fahrenheit').innerHTML = 'Fahrenheit: ' + ((kelvin - 273.15) * 9/5 + 32).toFixed(1);
    document.getElementById('description').innerHTML = 'Status: ' + weatherData.weather[0].description;
}

const init = () => {
    const cityField = document.getElementById('city');
    const submit = document.getElementById('submit');
    submit.onclick = async function() {
        const city = cityField.value.toLowerCase();
        const weatherData = await getWeather(city);
        const weatherName = weatherData.weather[0].main
        await output(weatherData);
        await weatherGiphy(city, weatherName);
    }
}

export default init;