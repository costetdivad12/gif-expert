
import React, { useState,useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGrillItem from './GifGrillItem';

const GifGrill = ({ categoria}) => {

  // const [Count, setCount] = useState(0); 
  // const contar = ()=>{
    //   setCount(Count+1);
    // }



    // const [Images, setImages] = useState([]);
    const { data:images,loading } =useFetchGifs(categoria);

   


    // useEffect(()=>{
    //    getGifs(categoria).then((img)=>{setImages(img)} );
    //  },[categoria]);





  return (
    < >
    <h3 >{categoria}</h3>
     {loading &&  <img src="loadong.gif" /> }
     <div className='card-grid'>
    { 
          images.map( ( img )=>(
                // <li key={id}>{title}</li>
                <GifGrillItem
                key={img.id}
                {...img} />
           ))
        }
    {/* <h3>{Count}</h3> */}
    {/* <button onClick={contar}>Contar</button> */}
    </div>
    </>
  )
}

export default GifGrill