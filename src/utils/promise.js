/* global USE_NATIVE_PROMISE */
/* eslint-env node, browser */
/* eslint-disable */

import PromisePolyfill from 'promise-polyfill';

// using the native Promise does not work properly with fake timers in tests;
// the polyfill, however, seems to cause problems in Mocha tests
let Promise;

const getPromise = object =>
  (typeof USE_NATIVE_PROMISE === 'undefined' ||
  typeof object.Promise === 'undefined' ? PromisePolyfill : object.Promise);

if (typeof window === 'undefined' && typeof self === 'undefined') {
  Promise = global.Promise;
} else if (typeof self === 'undefined') {
  Promise = getPromise(window);
} else {
  Promise = getPromise(self);
}

export {Promise};

export default Promise;
