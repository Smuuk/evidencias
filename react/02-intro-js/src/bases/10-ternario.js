const activo = true;


// FORMA TRADICIONAL DE HACER UNA DECISIÓN

// let mensaje = '';

// if ( activo ) {
//     mensaje = 'Activo';
// }
// else{
//     mensaje = 'Inactivo';
// }

//FORMA DEL OPERADOR CONDICIOANL TERNARIO

//forma 1
// const mensaje = (activo ) ? 'Activo' : 'Inactivo'
//forma 2
const mensaje = ( activo ) && 'Activo';
 
console.log(mensaje);
