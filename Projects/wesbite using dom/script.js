// Get the content div by its id
const contentDiv = document.getElementById('content');

// Create a nav element for the navigation bar
const nav = document.createElement('nav');

// Create an unordered list for the navigation links
const ul = document.createElement('ul');

// Create list items for each navigation link
const homeLi = document.createElement('li');
const aboutLi = document.createElement('li');
const contactLi = document.createElement('li');

// Create anchor elements for each navigation link
const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';

const aboutLink = document.createElement('a');
aboutLink.href = '#';
aboutLink.textContent = 'About';

const contactLink = document.createElement('a');
contactLink.href = '#';
contactLink.textContent = 'Contact';

// Append anchor elements to list items
homeLi.appendChild(homeLink);
aboutLi.appendChild(aboutLink);
contactLi.appendChild(contactLink);

// Append list items to the unordered list
ul.appendChild(homeLi);
ul.appendChild(aboutLi);
ul.appendChild(contactLi);

// Append the unordered list to the navigation bar
nav.appendChild(ul);

// Append the navigation bar to the content div
contentDiv.appendChild(nav);
