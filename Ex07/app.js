async function precoBitcoin () {
    
    const response = await fetch ('https://api.coincap.io/v2/assets/bitcoin');
    const data = await response.json();
    console.log(`O preço do Bitcoin - ${data.data.symbol} em dólares hoje é $ ${data.data.priceUsd}`);
}

precoBitcoin();