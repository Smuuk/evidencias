let cadena = 'Esto es un string';
console.log(typeof cadena);

// cadena = 666;
// console.log(cadena);


const numero = 12;
console.log(numero);

const objeto = {
    nombre: 'Venus',
    apodo: 'Venustiana Carranza',
    oracion: 'esto es un objeto',
}

console.log(objeto);

const boleano = true;
console.log(!boleano);

const funcion = () =>{}

console.log(funcion);

//tipo de clase es una function

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

const arreglo = ['cadena1','cadena2','cadena3'];
console.log(arreglo);


//enlazando cadenas

const cadena1 = 'alumno1';
const cadena2 = 'alumno2';

console.log(`Los alumnos son: ${cadena1} y ${cadena2} `);


