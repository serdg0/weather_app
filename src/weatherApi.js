async function getWeather(city) {
    const key = process.env.WEATHER_KEY;
    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + key, {mode: 'cors'})
    const weatherData = await response.json();
    return weatherData
}

async function weatherDesc(city) {
    const weatherData = await getWeather(city);
    return weatherData.weather[0].description;
}

async function weatherTemp(city) {
    const weatherData = await getWeather(city)
    return weatherData.main.temp
}

async function weatherCelsius(city) {
    const weatherData = await weatherTemp(city);
    return weatherData - 273.15;
}

async function weatherFahren(city) {
    const weatherData = await weatherTemp(city);
    return (weatherData - 273.15)*9/5 + 32;
}

async function weatherName(city) {
    const weatherData = await getWeather(city)
    return weatherData.weather[0].main
}

export {weatherFahren, weatherCelsius, weatherDesc, weatherName}