// src/polyfills.js
/* eslint-disable no-undef */ 
// Polyfill for Array.prototype.at
if (!Array.prototype.at) {
    Array.prototype.at = function(n) {
      n = Math.trunc(n) || 0;
      if (n < 0) n += this.length;
      if (n < 0 || n >= this.length) return undefined;
      return this[n];
    };
  }
  
  // Polyfill for Promise.allSettled
  if (!Promise.allSettled) {
    Promise.allSettled = function(promises) {
      return Promise.all(
        promises.map(promise =>
          promise
            .then(value => ({ status: 'fulfilled', value }))
            .catch(reason => ({ status: 'rejected', reason }))
        )
      );
    };
  }
  
  // Polyfill for Promise.withResolvers
  if (!Promise.withResolvers) {
    Promise.withResolvers = function() {
      let resolve, reject;
      let promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
  }
  