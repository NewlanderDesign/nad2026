import fs from 'fs';

const transparentPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');

fs.writeFileSync('public/phones-controller.png', transparentPng);
fs.writeFileSync('public/phones-settings.png', transparentPng);
console.log('Created placeholder PNGs for phones');
