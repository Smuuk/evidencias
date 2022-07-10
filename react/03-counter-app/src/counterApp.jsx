import { useState } from "react";


export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(10);

    const handleAdd = () => {
        setCounter(counter + 1);


        //otra forma sin llamar al "counter" como tal, es haciendo una funcion flecha donde la variable entre los "()" sera el nombre de la variable que se le guarda el counter
        // setCounter ( (c) => c+1)
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(10);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSubtract}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    );
}
