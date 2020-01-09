async function weatherGiphy(city, weather) {
    const key = process.env.GIF_KEY;
    const cityGif = document.getElementById('gif')
    const weatherGif = document.getElementById('weather');

    const cityResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${city}`, {mode: 'cors'});
    const weatherResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=weather+sky+${weather}`, {mode: 'cors'});

    const gifData = await cityResponse.json();
    cityGif.src = gifData.data.images.original.url;

    const weatherData = await weatherResponse.json();
    weatherGif.src = weatherData.data.images.original.url;
}

export default weatherGiphy;