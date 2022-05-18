import { async } from 'q';
import React from 'react'

const GifGrill = ({ categoria}) => {

const getGif= async()=>{
    const url ='https://api.giphy.com/v1/gifs/search?api_key=lw5xvXct2yHz0sIOiY3jptzjYWPNu3hP&q=matute&limit=2';

    const respuesta = await fetch(url);

    const {data} = await respuesta.json();

    const gifs =data.map((img)=>{
       return  {
           id:img.id,
           title:img.title,
           url:img.images?.downsized_medium.url
       }
    });
    console.log(gifs);

}
  getGif();


  return (
    <>
    <li >{categoria}</li>
    </>
  )
}

export default GifGrill