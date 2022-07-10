//Desestructuracion
//Asigancion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironMan',
};

//una forma de obtener los valores que estan dentro del objeto "persona"
const { nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);


//funcion para retornar datos de un objeto

const retornaPersona = ({nombre, edad, clave}) => {
    console.log(nombre, clave, edad);

};

retornaPersona(persona);

//obteniendo los valores de un objeto dentro de una funcion

const useContext = ({clave, edad}) => {
    return{
        nombreClave: clave,
        anios: edad,
    }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, anios} = useContext( persona );

console.log(nombreClave, anios)


