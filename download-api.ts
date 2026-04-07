import fs from 'fs';

async function downloadFromApi(path: string, dest: string) {
  const res = await fetch(`https://api.github.com/repos/NewlanderDesign/nad2026/contents/${path}`);
  const data = await res.json();
  if (data.encoding === 'base64') {
    const buffer = Buffer.from(data.content, 'base64');
    fs.writeFileSync(dest, buffer);
    console.log(`Downloaded ${dest}, size: ${buffer.length}`);
  } else {
    console.error(`Failed to download ${path}: not base64`);
  }
}

async function main() {
  await downloadFromApi('public/websitelogo.png', './public/websitelogo.png');
  await downloadFromApi('public/phones-settings.png', './public/phones-settings.png');
}

main();
