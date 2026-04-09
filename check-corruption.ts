import fs from 'fs';

const files = [
  'public/nad-module.png',
  'public/phones-controller.png',
  'public/phones-settings.png',
  'public/websitelogo.png'
];

for (const file of files) {
  try {
    const buffer = fs.readFileSync(file);
    let corruptCount = 0;
    for (let i = 0; i < buffer.length - 2; i++) {
      if (buffer[i] === 0xEF && buffer[i+1] === 0xBF && buffer[i+2] === 0xBD) {
        corruptCount++;
      }
    }
    console.log(`${file}: size=${buffer.length}, corrupt bytes (EF BF BD) count=${corruptCount}`);
  } catch (e) {
    console.log(`Error reading ${file}`);
  }
}
