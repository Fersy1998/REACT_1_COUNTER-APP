import heroes from '../data/heroes';


export const getHeroById=(id)=>{
    return heroes.find(element => element.id === id);
}


export const getHeroByOwner=(owner)=>{
   // return heroes.filter(heroes =>heroes.owner === owner);
   return heroes.filter(heroes=>heroes.owner===owner);
}

export default getHeroById;