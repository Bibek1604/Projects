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

// Function to handle clicking on Home link

function handleMainLinkClick() {
    contentDiv.innerHTML = `
        <h2>Welcome to Main Page of  Website!</h2>
        <p>To see the all the information of other tag of nav click them .</p>
    `
}
function handleHomeLinkClick() {
    contentDiv.innerHTML = `
    <img src="profile.png"  style="width:100% height=100px">
    `;
}

function handleAboutLinkClick() {
    contentDiv.innerHTML = `
        <h2>About Us</h2>
        <p>We are a team of developers who are passionate about web development.</p>
    `;  
}
aboutLink.addEventListener('click', handleAboutLinkClick);

function handleContactLinkClick() {
    contentDiv.innerHTML = `
        <h2>Contact Us</h2>
        <p>Email:npbibek94@gmail.com</p>
        <img src="https://www.w3schools.com/images/picture.jpg" alt="Contact us" style="width:100%">
`;
    }

contactLink.addEventListener('click', handleContactLinkClick);
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
    <p>This is a simple example of a website created using DOM manipulation here in this portion i have my webte to show you.</p>
`;
