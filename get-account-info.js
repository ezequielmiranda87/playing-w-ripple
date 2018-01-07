//This script, fetches information about a hard-coded account. Use it to test that RippleAPI works.

'use strict';
const RippleAPI = require('ripple-lib').RippleAPI; // Imports RippleAPI into the current scope using Node.js require function.  RippleAPI is one of the modules ripple-lib expoerts


// Instantiating the API
const api = new RippleAPI({
    server: 'wss://s1.ripple.com'  // Public ripplled server
});

api.connect().then(()=>{
  const myAddres='rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';
  console.log('Getting account info for', myAddres);
  return api.getAccountInfo(myAddres)
}).then(info=>{
  console.log(info);
  console.log('GetAccountInfoDone')
})

/*
Output info:

{
  sequence: 6,
  xrpBalance: '435.16216',
  ownerCount: 1,
  previousAffectingTransactionID: '9DC318489DB9A900A40CBE26EF84A1E6A11DB4E94CECB6CE27A7DA23259BF431',
  previousAffectingTransactionLedgerVersion: 35624580
}

*/
