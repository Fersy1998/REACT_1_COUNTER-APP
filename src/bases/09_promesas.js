
import getHeroById from './08_find_filter'


export const getHeroByIdAsync=(id)=>{
    return new Promise((res, err)=>{
        setTimeout(()=>{
            const heroe=getHeroById(id);
            if(heroe){
                res(heroe);
            }else{
                err("No se encontró")
            }
        
        }, 1500);
        
    
    });

}
/*
getHeroByIdAsync(7)
    .then((res)=>console.log(res))
    .catch((err)=>console.warn(err));

    getHeroByIdAsync(7)
    .then(console.log)
    .catch(console.warn);
*/