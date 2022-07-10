const instrumentos = ['bateria', 'guitarra', 'bajo', 'saxofon'];
console.log(instrumentos);

//recorrido de los valores

console.log(instrumentos[3]);

for(let i = 0; i < instrumentos.length; i++){
    console.log(`indice: ${i} = ${instrumentos[i]}`);
}

//modificando datos del arreglo

instrumentos[2] = 'Contrabajo';
console.log(instrumentos);

//agregar elementos

instrumentos.push('mayonesa');
console.log(instrumentos);

//como saber si es un array
console.log(instrumentos instanceof Array);
