async function weatherGiphy(weather) {
  const key = process.env.GIF_KEY;
  const weatherGif = document.getElementById('weather');

  const weatherResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=weather+sky+${weather}`, { mode: 'cors' });

  const weatherData = await weatherResponse.json();
  weatherGif.src = weatherData.data.images.original.url;
}

export default weatherGiphy;
