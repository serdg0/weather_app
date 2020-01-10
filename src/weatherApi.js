async function getWeather(city) {
    const key = process.env.WEATHER_KEY;
    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, {mode: 'cors'})
    const weatherData = await response.json();
    return weatherData
}

async function weatherName(city) {
    const weatherData = await getWeather(city)
    return weatherData.weather[0].main
}

export {getWeather, weatherName}