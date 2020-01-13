import getWeather from './weatherApi';
import weatherGiphy from './giphy';


async function output(weatherData) {
  const kelvin = parseFloat(weatherData.main.temp).toFixed(2);

  document.getElementById('celsius').innerHTML = `Celsius: ${(kelvin - 273.15).toFixed(1)}`;
  document.getElementById('fahrenheit').innerHTML = `Fahrenheit: ${((kelvin - 273.15) * 9 / 5 + 32).toFixed(1)}`;
  document.getElementById('description').innerHTML = `Status: ${weatherData.weather[0].description}`;
}

async function button() {
  const key = process.env.GIF_KEY;
  const cityField = document.getElementById('city');
  const city = cityField.value.toLowerCase();
  const weatherData = await getWeather(city);
  if (weatherData.message === undefined) {
    const weatherName = weatherData.weather[0].main;
    await output(weatherData);
    await weatherGiphy(weatherName);
  } else {
    const errorGif = await fetch(`https://api.giphy.com/v1/gifs/HKmW8g1pG0Rig?api_key=${key}`);
    const errorData = await errorGif.json();
    document.getElementById('weather').src = errorData.data.images.original.url;
    document.getElementById('celsius').innerHTML = 'FAILED TASK BRO/SIS';
    document.getElementById('description').innerHTML = '';
    document.getElementById('fahrenheit').innerHTML = '';
  }
}

async function init() {
  const key = process.env.GIF_KEY;
  const submit = document.getElementById('submit');
  submit.onclick = () => button();
  const welcome = await fetch(`https://api.giphy.com/v1/gifs/ASd0Ukj0y3qMM?api_key=${key}`);
  const welcomeData = await welcome.json();
  document.getElementById('weather').src = welcomeData.data.images.original.url;
}

export default init;
