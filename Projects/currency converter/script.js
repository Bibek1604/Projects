const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');

generateBtn.addEventListener('click', () => {
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrencyValue}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[toCurrencyValue];
      result.innerHTML = `1 ${fromCurrencyValue} = ${rate} ${toCurrencyValue}`;
    }); // <-- Added closing parenthesis here
});
