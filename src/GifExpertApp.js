import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['One Punch', 'Naruto', 'Dragon Ball']; 

    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     setCategories(['Boku no Pico', ...categories]);
    // }

    const bodyReact = <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}/>
    <hr/>

    {/* <button onClick={ handleAdd }>Agregar</button> */}

    <ol> 
        {
            categories.map( category => (
                <GifGrid 
                key={ category }
                category={ category }/>
            ) )
        }
    </ol>
    </>;
    return(bodyReact);
}

export default GifExpertApp;