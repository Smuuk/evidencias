import { getHeroeById } from './bases/08-imports-exports';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject ('no se pudo encontrar al heroe')
//     }, 2000)
// });


// promesa.then( (heroe) =>{
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

   return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            // console.log(heroe);
            if (heroe === undefined){
                reject ('no se pudo encontrar al heroe')
            }else {
                resolve(heroe);
            }
        }, 2000)
    });
    
}

getHeroeByIdAsync(2).then(heroe => console.log('Heroe', heroe))
.catch(err => console.warn(err));
