import { heroes } from '../data/heroes';

//find()

export const getHeroeById = (id) => {
    return heroes.find( iden => iden.id === id);
}

// console.log( getHeroeById(2));

//filter()

export const getHeroeByOwner = (owner) => {
    return heroes.filter( compania => compania.owner === owner);
}

// console.log(getHeroeByOwner('DC'));
