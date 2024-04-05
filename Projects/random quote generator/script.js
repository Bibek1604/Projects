const disc = document.getElementById('disc');
const btn =document.getElementById('btn');   
const url = "https://official-joke-api.appspot.com/random_joke"  ;

let getJoke=()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        disc.innerHTML = data.setup + "<br>" + data.punchline;
    })
    .catch((error)=>console.log(error));
};
btn.addEventListener('click',getJoke);