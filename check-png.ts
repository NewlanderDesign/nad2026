import fs from 'fs';
const files = ['nad-module.png', 'phones-controller.png', 'phones-settings.png', 'websitelogo.png'];
for (const file of files) {
  try {
    const buf = fs.readFileSync('public/' + file);
    console.log(file, buf.slice(0, 8));
  } catch (e) {
    console.error(e);
  }
}
