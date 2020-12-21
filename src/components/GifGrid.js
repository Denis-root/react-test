// import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helpers/getGifs'

export const GifGrid = ( {category } ) => {

    //const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category )
    //     .then( setImages );
    // },[ category ]);


    const {data:images, loading } = useFetchGifs( category );
    return (
       <>
       <h3 className="animate__flash" > { category } </h3>

           { loading && <p className="animate__flash" >Loading</p>}
           
        <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                        key = { img.id }
                        {... img }
                        />
                    ))
                }
        </div>
       </>
    )
    // return (
    //     <div>
    //         <h3> { category } </h3>
    //         <ol>
    //             {
    //                 images.map( (({id, title}) =>
    //                     <li key={id}> { title } </li>))
    //             }
    //         </ol>
    //     </div>
    // )
}
