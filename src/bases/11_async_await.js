

//const peticion= fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKeyGiphy}`);



export const getImagen= async()=>{
    try{
        //const apiKeyGiphy='bG8FVT4N77UtPb6GfYcjNYlHHCc2z5q7';
        const apiKeyGiphy='pWh0FHHn7oYjnA4DS9ogj3daHsgvnmZJ';
        const res= await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKeyGiphy}`);
        const {data}=await res.json();
        const {url}=data.images.original;
        
        //console.log(data[19].images.original.url);
        //const img=document.createElement('img');
        //img.src=url;
        return url;
        //document.body.append(img);
        
    }
    catch (error){
        return "Error "+error;
    }
    
    
}
//getImagen();