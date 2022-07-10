import { GifItem } from './gifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

import PropTypes from 'prop-types'; //new, for testing



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>cargando GIFS</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}


 //new, for testing
GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
