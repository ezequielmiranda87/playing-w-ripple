//This script, fetches information about a hard-coded account. Use it to test that RippleAPI works.

'use strict';
const RippleAPI = require('ripple-lib').RippleAPI; // Imports RippleAPI into the current scope using Node.js require function.  RippleAPI is one of the modules ripple-lib expoerts

const RippleServer = {server: 'wss://s1.ripple.com'};
const testServer = {server:'wss://s.altnet.rippletest.net:51233'}


// Test address  - balance: 10,000XRP
const testAddress = {
  public: 'rUGJAj3ErWY25W66CSF9EUhjdKFnumD7Lj',
  secret: 'ssDvz84CArogDAHKkpLiZHcqZyC59'
}


// Instantiating the API
const api = new RippleAPI(testServer)  // Public ripplled server);

api.connect().then(()=>{
  const myAddres='rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';
  console.log('Getting account info for', testAddress.public);
  return api.getAccountInfo( testAddress.public)
  }).then(info=>{
  console.log(info);
  console.log('GetAccountInfoDone')
})
