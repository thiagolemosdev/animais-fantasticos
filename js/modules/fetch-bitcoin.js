export default function initFetchBitcoin() {}

async function fetchBitcoin(url) {
  try {
    const bitcoinResponse = await fetch(url);
    const bitcoinJSON = await bitcoinResponse.json();
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerHTML = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
  } catch (erro) {
    console.log("Error Bitcoin");
  }
}

fetchBitcoin("https://blockchain.info/ticker");

// https://blockchain.info/ticker
