
// const gif

const img=document.getElementById('img');
// fetch('https://api.giphy.com/v1/gifs/translate?api_key=rl2f1nH2SwnlrF39axefwd3kRxYewOju&s=cats',{mod : 'cors'})
// .then((response)=>{
//     return(response.json());
// })
// .then((response)=>{
//     console.log(response.data.images.original.url);
//     img.src=response.data.images.original.url;
//     // document.body.appendChild(img);
// })
// .catch(()=>{
//     console.log('Error');
// })


async function getGiphies(){
    const input = document.getElementById("input-gif").value;
    // document.getElementById('shuffle').addEventListener('click',getGiphies);
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rl2f1nH2SwnlrF39axefwd3kRxYewOju&s=${input}`,{mod : 'cors'})
    const gifData = await response.json()
    
    img.src=gifData.data.images.original.url;
}

document.getElementById('search').addEventListener('click',getGiphies);
// getGiphies();

