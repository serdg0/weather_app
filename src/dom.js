import * as data from './weatherApi';
import weatherGiphy from './giphy';

const output = async function() {
    const city = document.getElementById('city');
    document.getElementById('celsius').innerHTML = 'Celsius: ' + await data.weatherCelsius(city.value);
    document.getElementById('fahrenheit').innerHTML = await data.weatherFahren(city.value);
    document.getElementById('description').innerHTML = await data.weatherDesc(city.value);
}

const init = () => {
    const city = document.getElementById('city');
    const submit = document.getElementById('submit');
    submit.onclick = async function() {
        const weatherName = await data.weatherName(city.value);
        await output();
        await weatherGiphy(city.value.toLowerCase(), weatherName);
    }
}

export default init;