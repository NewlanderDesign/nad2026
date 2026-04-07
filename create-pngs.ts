import fs from 'fs';

const transparentPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');

fs.writeFileSync('public/iphone.png', transparentPng);
fs.writeFileSync('public/android.png', transparentPng);
console.log('Created transparent PNGs');
