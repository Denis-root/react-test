export const getGifs = async ( category ) => {
    // const url = 'https://api.giphy.com/v1/gifs/search?q=Aesthetic&limit=10&api_key=QXs6UBxmDfzCBWjBaDvrm4Eb42vRtVGk';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=QXs6UBxmDfzCBWjBaDvrm4Eb42vRtVGk`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //console.log(gifs);
    //setImages( gifs );
    return gifs;
}