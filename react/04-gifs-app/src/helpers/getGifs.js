export const getGifs = async (category) => {
    // url de giphy
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4LYWtKnWiHz3qVBiW4GTi5CeLYWlOV8z&q=${category}&limit=10`;
    const resp = await fetch(url);
    //variable para guardar los datos del json
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}


