const sumaFuncion = (a,b) => {
    // return console.log(`El resultado de la suma es ${a+b}`);
    return a+b;
}

sumaFuncion(2,10);
// llamando a la función 
let resul = sumaFuncion(2,7);
console.log(resul);

//declaracion de Función de tipo Expresión
let sumar = function (a,b){return a+b};

resul = sumar(1,2);
console.log(resul);

//sumar todos los argumentos

let resultado = sumarTodo(5, 2, 3, 8);
console.log(resultado);

function sumarTodo () {
    let suma = 0;
    for(let i = 0; i < arguments.lenght; i++){
        suma += arguments[i];
    }return suma;
}

//Paso por valor: es pasar el valor de una variable a otra mediante una función
let x = 10; //valor primitivo: que solo tiene un dato

function cambiarValor (a){
    a= 20;
}

cambiarValor(x);
console.log(x); //recordar que no se refiere a que se reemplaza el valor original, esto porque "a" solo existe dentro la funcion

//Paso por referencia: es pasar la referecia de un objeto a otra variable para modificar los valores de la referencia


const persona = {
    nombre: 'Gorgio',
    apellido: 'Sun'
}


function cambiarValorObjeto (p1) {
    p1.nombre = 'Max';
    p1.apellido = 'Cania';
}

cambiarValorObjeto(persona);

console.log(persona);
