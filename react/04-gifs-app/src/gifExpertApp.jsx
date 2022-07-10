import { useState } from "react"
import { AddCategory } from './components/addCategory'
import { GifGrid } from "./components/gifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Doroedoro', 'Naruto']);

    const onAddCategory = (newCategory) => {
        //primera forma de hacerlo: con spread "...variable_con_valores_a_jalar"
        // setCategories( [ 'DeathNote', ...categories] )

        //cambio del setCategories para recibir lo que tenga el input
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])


    }
    return (
        <>
            {/* Titulo */}
            <h1>Titulo de gif expert app</h1>

            {/* Input */}
            <AddCategory
                //  setCategories={ setCategories }
                onNewCategory={(value) => onAddCategory(value)}

            >

            </AddCategory>
            <br />

            {/* Listado de GIF */}
            <ol>
                {categories.map((category) => (
                
                        <GifGrid
                            key={category}
                            category={category} />
                
                ))}
            </ol>
            {/* GIF item */}

        </>
    )
}
