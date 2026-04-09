import https from 'https';
import fs from 'fs';

const url = 'https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/nad-module.png';

https.get(url, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
  res.on('data', (chunk) => {
    console.log('First chunk:', chunk.slice(0, 16));
    process.exit(0);
  });
});
