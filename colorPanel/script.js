const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const messageDiv = document.getElementById('message');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const colorName = e.target.textContent; // Get the text content of the clicked button
        body.style.backgroundColor = e.target.id;

        
        if (e.target.id === 'red') {
            body.style.backgroundColor = 'red';
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = 'green';
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = 'purple';
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = 'orange';
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = 'pink';
        }
    });
});
