function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const conversionRates = {
        npr: { npr: 1, usd: 0.0085, inr: 0.63, cny: 0.053, jpy: 0.0091, krw: 9.46 },
        usd: { npr: 117.71, usd: 1, inr: 74.85, cny: 6.35, jpy: 109.39, krw: 1133.45 },
        inr: { npr: 1.59, usd: 0.013, inr: 1, cny: 0.084, jpy: 1.45, krw: 15.07 },
        cny: { npr: 18.91, usd: 0.16, inr: 11.87, cny: 1, jpy: 17.24, krw: 178.74 },
        jpy: { npr: 109.71, usd: 0.0091, inr: 0.69, cny: 0.058, jpy: 1, krw: 10.34 },
        krw: { npr: 0.11, usd: 0.00088, inr: 0.066, cny: 0.0056, jpy: 0.097, krw: 1 }
    };

    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    const result = document.getElementById('result');
    result.innerHTML = convertedAmount.toFixed(2) + " " + toCurrency.toUpperCase();
}
