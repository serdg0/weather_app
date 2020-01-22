import Unsplash from "unsplash-js";

async function imgUsplash(text) {
    const key = process.env.UKEY;
    const unsplash = new Unsplash({
        accessKey: key,
    })
    const response = await unsplash.search.photos(`${text}+sky`, 1, 1);
    const data = await response.json();

    document.body.style.backgroundImage = `url(${data.results[0].urls.full})`;
}

export default imgUsplash;