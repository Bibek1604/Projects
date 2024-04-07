const root = document.getElementById('root');

// Create navigation elements
const nav = document.createElement("ul");
nav.classList.add("navigation");

const homeli = document.createElement("li");
homeli.textContent = "Home";

const contentli = document.createElement('li');
contentli.textContent = "Content";

const aboutli = document.createElement('li');
aboutli.textContent = "About";

nav.appendChild(homeli);
nav.appendChild(contentli);
nav.appendChild(aboutli);

root.appendChild(nav);

// Create home section
const homeSection = document.createElement('div');
homeSection.classList.add('home-section');
homeSection.textContent = "Home Section";
root.appendChild(homeSection);

// Add event listener to toggle visibility of home section
homeli.addEventListener('click', function() {
    homeSection.classList.toggle('show');
});

// Create content section
const contentSection = document.createElement('div');
contentSection.classList.add('content-section');
contentSection.textContent = "Content Section";

// Add event listener to toggle visibility of content section
contentli.addEventListener('click', function() {
    contentSection.classList.toggle('show');
});

// Create about section
const aboutSection = document.createElement('div');
aboutSection.classList.add('about-section');
aboutSection.textContent = "About Section";

// Add event listener to toggle visibility of about section
aboutli.addEventListener('click', function() {
    aboutSection.classList.toggle('show');
});

// Append content and about sections to the root, but hide them initially
root.appendChild(contentSection);
root.appendChild(aboutSection);
