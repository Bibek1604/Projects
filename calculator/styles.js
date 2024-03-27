const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('input[name="height"]').value);
    const weight = parseFloat(document.querySelector('input[name="weight"]').value);
    const results = document.querySelector('#results');

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid Height: ${height}`;
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid Weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is: ${bmi}`;
    }
});
