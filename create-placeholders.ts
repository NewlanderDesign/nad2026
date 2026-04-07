import fs from 'fs';

const transparentPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const buffer = Buffer.from(transparentPngBase64, 'base64');

fs.writeFileSync('./public/phones-controller.png', buffer);
fs.writeFileSync('./public/nad-module.png', buffer);
fs.writeFileSync('./public/phones-settings.png', buffer);

console.log('Created placeholder PNGs');
