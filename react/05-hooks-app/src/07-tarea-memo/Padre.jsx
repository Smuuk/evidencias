import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        ( num ) => {
            setValor( (oldValue) => oldValue + num )
        },
      [],
    );
       


    return (
        <div>
            <h2>Padre</h2>
            <p> Total: { valor } </p>

            <hr />
            <hr />


            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
            
        </div>
    )
}

