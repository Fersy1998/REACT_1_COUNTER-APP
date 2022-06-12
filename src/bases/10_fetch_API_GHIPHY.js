const apiKeyGiphy='bG8FVT4N77UtPb6GfYcjNYlHHCc2z5q7';

const peticion= fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKeyGiphy}`);
/*
peticion.then(res=>{
    console.log(res);
    
    res.json().then(data=>{
        console.log(data);
    })
}
)
.catch(err=>console.warn(err));
*/

/*peticion.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.warn(err));*/


peticion.then(res=>res.json())
.then(({data})=>{
    const {url}=data.images.original;
    
    //console.log(data[19].images.original.url);
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(err=>console.warn(err));
