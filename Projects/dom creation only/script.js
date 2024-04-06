const root = document.getElementById('root');

const nav = document.createElement("li");

const homeli = document.createElement("homeli");
homeli.textContent="Home";

const contentli = document.createElement('contentli')
contentli.textContent= "content";

const aboutli =document.createElement('aboutli')
aboutli.textContent="About"

root.appendChild(nav);

root.appendChild(homeli);
root.appendChild(contentli);
root.appendChild(aboutli);