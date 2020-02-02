const formatDataForGrid = (cryptos) => {
  if (!cryptos) {
    return null;
  }

  return cryptos.map(crypto => ({
    rank: crypto.rank,
    name: crypto.name,
    price: crypto.quotes.USD.price,
    price_change: crypto.quotes.USD.percent_change_24h,
    market_cap: crypto.quotes.USD.market_cap,
    volume_24h: crypto.quotes.USD.volume_24h,
  }));
};

const formatDataForSpChart = (cryptos) => {
  if (!cryptos) {
    return null;
  }

  return cryptos.map(crypto => ({
    name: crypto.name,
    market_cap_s: parseFloat(crypto.quotes.USD.market_cap / 10000000).toFixed(2),
    market_cap: crypto.quotes.USD.market_cap,
    volume_24h_s: parseFloat(crypto.quotes.USD.volume_24h / 100000000).toFixed(2),
    volume_24h: crypto.quotes.USD.volume_24h,
    perc_change_24h: Math.abs(crypto.quotes.USD.percent_change_24h),
    perc_change_24h_actual: crypto.quotes.USD.percent_change_24h,
  }));
};

export {
  formatDataForGrid,
  formatDataForSpChart,
};
