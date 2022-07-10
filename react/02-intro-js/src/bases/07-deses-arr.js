const planetas = ['Mercurio', 'Venus', 'Tierra'];

const [ ,p2] = planetas;

console.log(p2);

const retornaArreglo = () => {
    return['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

//Tarea

const useState = (valor) => {
    return [valor, ()=> {console.log('hola munodd')}];

}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] =  useState ('Gato');

console.log(nombre)
setNombre();
