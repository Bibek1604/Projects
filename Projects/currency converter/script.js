document.getElementById('generateBtn').addEventListener('click', function() {
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    var resultElement = document.getElementById('result');
  
    // Here you can implement logic to fetch exchange rate from an API
    // For simplicity, let's just display a mock exchange rate
    var exchangeRate = Math.random() * (1.2 - 0.8) + 0.8; // Random rate between 0.8 and 1.2
  
    resultElement.innerHTML = '1 ' + fromCurrency + ' = ' + exchangeRate.toFixed(2) + ' ' + toCurrency;
  });
  