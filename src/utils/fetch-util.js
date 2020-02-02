import './fetch';

function fetchJSON(url = '', opts = {}) {
  const headers = {
      accept: 'application/json',

      // The content-type header causes a pre-flight request that is difficult
      // to catch https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_request
      ...opts.headers,
    },
    options = { credentials: 'omit', headers, ...opts };

  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response[response.status === 204 ? 'text' : 'json']();
      }
      response.error = new Error(response.statusText);
      return response;
    });
}

export default fetchJSON;
