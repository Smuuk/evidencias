const saludar2 = ( nombre ) => {
    return `hola, ${nombre} `;
}

const saludar3 = (nombre) => `Hola, ${nombre}`; //esto es lo mismo que saludar2 pero de otra forma; SOLO SE USA CUANDO solo hay un return)?
const saludar4 = () => 'hola mundo';

const getUser = () => ({
        uid: 'ABC123',
        username: 'wakeful',
 });

console.log( saludar2('Venus'));
console.log( saludar3('Jupiter'));
console.log( saludar4());
console.log( getUser());




//Tarea

const getUsuarioActivo = ( nombre ) => ({
        uid: 'QWE789',
        username: nombre,
    
}); 

const usuarioActivo = getUsuarioActivo('Dovemen');
console.log(usuarioActivo);
