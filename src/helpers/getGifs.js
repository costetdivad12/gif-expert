export const getGifs= async( categoria )=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=lw5xvXct2yHz0sIOiY3jptzjYWPNu3hP&q=${encodeURI( categoria)}&limit=7`;

    const respuesta = await fetch(url);

    const {data} = await respuesta.json();

    const gifs =data.map((img)=>{
       return  {
           id:img.id,
           title:img.title,
           url:img.images?.downsized_medium.url
       }
    });
 return gifs;
    

}

