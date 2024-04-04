// Create a new HTML document
const doc = document.implementation.createHTMLDocument('My Website');

// Create a <head> element and add it to the document
const navbar =document.createElement('nav');
const li = document.createElement('li');
const home = document.createElement('home','#');
const about = document.createElement('about','#');
const contact = document.createElement('contact','#');

navbar.appendChild(li);
doc.documentElement.appendChild(navbar);

const head = doc.createElement('head');
doc.documentElement.appendChild(head);

// Create a <title> element and set its text content
const title = doc.createElement('title');
title.textContent = 'My Website';
head.appendChild(title);

// Create a <body> element and add it to the document
const body = doc.createElement('body');
doc.documentElement.appendChild(body);

// Create a <h1> element for the heading
const heading = doc.createElement('h1');
heading.textContent = 'Welcome to My Website';
body.appendChild(heading);

// Create a <p> element for some text content
const paragraph = doc.createElement('p');
paragraph.textContent = 'This is a paragraph of text on my website.';
body.appendChild(paragraph);

// Create a <footer> element for the footer
const footer = doc.createElement('footer');
footer.textContent = '© 2024 My Website';
body.appendChild(footer);

// Convert the document to a string and set it as the HTML content of the current webpage
document.documentElement.innerHTML = doc.documentElement.innerHTML;
