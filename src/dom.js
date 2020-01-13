import getWeather from './weatherApi';
import weatherGiphy from './giphy';


const output = async function(weatherData) {
    const kelvin = parseFloat(weatherData.main.temp).toFixed(2);

    document.getElementById('celsius').innerHTML = 'Celsius: ' + (kelvin - 273.15).toFixed(1);
    document.getElementById('fahrenheit').innerHTML = 'Fahrenheit: ' + ((kelvin - 273.15) * 9/5 + 32).toFixed(1);
    document.getElementById('description').innerHTML = 'Status: ' + weatherData.weather[0].description;
}

async function init() {
    const cityField = document.getElementById('city');
    const submit = document.getElementById('submit');
    submit.onclick = async function() {
        const city = cityField.value.toLowerCase();
        const weatherData = await getWeather(city);
        if (weatherData.message == undefined) {
            const weatherName = weatherData.weather[0].main
            await output(weatherData);
            await weatherGiphy(weatherName);
        } else {
            document.getElementById('celsius').innerHTML = 'FAILED TASK BRO/SIS'
        }
    }
    const welcome = await fetch('https://api.giphy.com/v1/gifs/ASd0Ukj0y3qMM?api_key=I9ttJdsXY4zLUIHMMVnnx4wVt4h9xDV6')
    const welcomeData = await welcome.json();
    document.getElementById('weather').src = welcomeData.data.images.original.url;
}

export default init;