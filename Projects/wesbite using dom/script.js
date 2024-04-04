// Navbar creation
const navbar = document.createElement('nav');
const ul = document.createElement('ul');
const MainLink = createNavLink('Main', '#');
const homeLink = createNavLink('Home', '#');
const aboutLink = createNavLink('About', '#');
const contactLink = createNavLink('Contact', '#');

ul.appendChild(MainLink);
ul.appendChild(homeLink);
ul.appendChild(aboutLink);
ul.appendChild(contactLink);
navbar.appendChild(ul);

