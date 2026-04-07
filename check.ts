import fs from 'fs';

const files = ['public/websitelogo.png', 'public/nad-module.png'];

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    console.log(`--- ${file} ---`);
    console.log(content.substring(0, 100));
  } catch (e) {
    console.error(e);
  }
}
