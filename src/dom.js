import getWeather from './weatherApi';
import weatherGiphy from './giphy';

const radioForm = (kelvin) => {
  const radioCelsius = document.getElementById('celsius');
  const radioFahren = document.getElementById('fahrenheit');
  const output = document.getElementById('output');
  radioCelsius.onclick = () => { output.innerHTML = `${(kelvin - 273.15).toFixed(1)}°C`; };
  radioFahren.onclick = () => { output.innerHTML = `${((kelvin - 273.15) * 9 / 5 + 32).toFixed(1)}°F`; };
}

async function output(weatherData) {
  const kelvin = parseFloat(weatherData.main.temp).toFixed(2);
  const output = document.getElementById('output');
  document.getElementById('description').innerHTML = `Status: ${weatherData.weather[0].description}`;
  (document.getElementById('celsius').checked) ? output.innerHTML = `${(kelvin - 273.15).toFixed(1)}°C` : output.innerHTML = `${((kelvin - 273.15) * 9 / 5 + 32).toFixed(1)}°F`;
  radioForm(kelvin);
}

async function button() {
  const key = process.env.GIF_KEY;
  const cityField = document.getElementById('city');
  const city = cityField.value.toLowerCase();
  const weatherData = await getWeather(city);
  if (weatherData.message === undefined) {
    const weatherName = weatherData.weather[0].main;
    output(weatherData);
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
  const cityField = document.getElementById('city');
  cityField.onclick = () => { cityField.value = ''; };
  document.getElementById('celsius').checked = true;
  const submit = document.getElementById('submit');
  submit.onclick = () => button();
  const welcome = await fetch(`https://api.giphy.com/v1/gifs/ASd0Ukj0y3qMM?api_key=${key}`);
  const welcomeData = await welcome.json();
  document.getElementById('weather').src = welcomeData.data.images.original.url;
}

export default init;
