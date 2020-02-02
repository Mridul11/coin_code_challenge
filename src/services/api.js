import fetchJSON from '../utils/fetch-util';

const URLS = {
  TICKER: 'https://api.coinmarketcap.com/v2/ticker/?limit=',
};

export async function fetchCryptos(limit) {
  let promise;

  try {
    promise = await fetchJSON(URLS.TICKER + createFetchUrl(limit));
    return sortCryptos(promise.data);
  } catch (e) {
    promise = Promise.reject(e);
  }

  return promise;
}


function sortCryptos(cryptos) {
  const formattedCryptos = Object.keys(cryptos).map(key => cryptos[key]);

  formattedCryptos.sort((crypto1, crypto2) => crypto1.rank - crypto2.rank);

  return formattedCryptos;
}

function createFetchUrl(selectedOption) {
  const limit = parseInt(selectedOption, 10);

  return limit ? limit : 'all';
}
