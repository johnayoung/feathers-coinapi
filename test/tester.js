const https = require('https');
const fs = require('fs');

const options = {
  method: 'GET',
  hostname: 'rest.coinapi.io',
  path: '/v1/symbols',
  headers: { 'X-CoinAPI-Key': '267049E8-65A3-4318-B634-36F19242D115' },
};

const request = https.request(options, function (res) {
  res.setEncoding('utf8');
  const fileName = 'symbols.json';
  res.pipe(fs.createWriteStream(fileName));
  // res.on('data', function (chunk) {
  //   // process.stdout.write(chunk);
  //   fs.createWriteStream(fileName);
  // });
});

request.end();
