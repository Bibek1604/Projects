// Navbar creation
const navbar = document.createElement('nav');
const ul = document.createElement('ul');
const homeLink = createNavLink('Home', '#');
const aboutLink = createNavLink('About', '#');
const contactLink = createNavLink('Contact', '#');

ul.appendChild(homeLink);
ul.appendChild(aboutLink);
ul.appendChild(contactLink);
navbar.appendChild(ul);

// Function to handle clicking on Home link
function handleHomeLinkClick() {
    contentDiv.innerHTML = `
        <h2>Welcome to DOM Website!</h2>
        <p>This is a simple example of a website created using DOM manipulation.</p>
    `;
}

// Add event listener to Home link
homeLink.addEventListener('click', handleHomeLinkClick);

// Footer creation
const footer = document.createElement('footer');
const footerText = document.createTextNode('© 2024 DOM Website. All rights reserved.');
footer.appendChild(footerText);

// Append navbar and footer to the body
document.body.prepend(navbar);
document.body.appendChild(footer);

// Function to create nav link
function createNavLink(text, href) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = text;
    a.href = href;
    li.appendChild(a);
    return li;
}

// Populate content div initially
const contentDiv = document.getElementById('content');
contentDiv.innerHTML = `
    <h2>Welcome to DOM Website!</h2>
    <p>This is a simple example of a website created using DOM manipulation.</p>
`;
