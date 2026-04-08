import https from 'https';

https.get('https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/favicon.ico', (res) => {
  console.log('favicon.ico status:', res.statusCode);
});
https.get('https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/app/favicon.ico', (res) => {
  console.log('app/favicon.ico status:', res.statusCode);
});
https.get('https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/app/icon.png', (res) => {
  console.log('app/icon.png status:', res.statusCode);
});
