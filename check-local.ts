import fs from 'fs';

const files = [
  './public/nad-module.png',
  './public/phones-controller.png',
  './public/phones-settings.png',
  './public/websitelogo.png'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    const buffer = fs.readFileSync(file);
    console.log(`${file}: size ${buffer.length}, first bytes: ${buffer.subarray(0, 8).toString('hex')}`);
  } else {
    console.log(`${file}: not found`);
  }
}
