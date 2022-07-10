const nombre = 'Alexis';
const apellido = 'reyes';

// esto es un template string
const nombreCompleto = ` ${nombre} ${apellido}`;
console.log(nombreCompleto)

function getSalduo (nombre){
    return nombre;
}

console.log(`Esto es un saludo para: ${getSalduo(nombreCompleto)}`)
