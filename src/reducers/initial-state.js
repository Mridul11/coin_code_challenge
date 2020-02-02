
export default {
  cryptoConfig: {
    data: [],
    headers: [
      { headerName: 'Rank', field: 'rank' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Price', field: 'price' },
      { headerName: 'Price Change (24h)', field: 'price_change' },
      { headerName: 'Market Cap', field: 'market_cap' },
      { headerName: 'Volume (24h)', field: 'volume_24h' },
    ],
    pagination: {
      options: [{
        key: 100,
        value: 100,
      }, {
        key: 50,
        value: 50,
      }, {
        key: 10,
        value: 10,
      }, {
        key: 100,
        value: 'All',
      }],
      selected: 100,
    },
  },
};
