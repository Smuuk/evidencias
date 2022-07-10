const newMessage = 'Alexis, look';

const getWord =  ( nombre ) => {
    return `hola, ${nombre} `;
}

export const FirstApp = ({tittle, subTitle}) => {
    return(
        <>
            <p> {getWord('Venus')} </p>
            <p>arriba esta la variable de la funcion</p>
            <h1>Hola mola rola</h1>
            <h2>{tittle}</h2>
            <h2>{subTitle}</h2>
        </>
    )
}
