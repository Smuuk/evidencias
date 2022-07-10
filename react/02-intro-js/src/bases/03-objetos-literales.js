const persona = {
    nombre: 'Daniel',
    apellido: 'Medrano',
    edad: 25,
    direccion: {
        ciudad: 'Chicago',
        lat: 2.366,
        lng: 3.1416,
    }
};

const persona2 = {...persona};
persona2.nombre = 'Jupiter';

console.log(persona);
console.table(persona2);
