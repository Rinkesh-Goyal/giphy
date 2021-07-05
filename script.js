
const gif

const img=document.getElementById('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=rl2f1nH2SwnlrF39axefwd3kRxYewOju&s=cats',{mod : 'cors'})
.then((response)=>{
    return(response.json());
})
.then((response)=>{
    console.log(response.data.images.original.url);
    img.src=response.data.images.original.url;
    // document.body.appendChild(img);
})
.catch(()=>{
    console.log('Error');
})