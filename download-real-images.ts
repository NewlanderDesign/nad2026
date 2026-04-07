import fs from 'fs';

async function download(url: string, dest: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
  console.log(`Downloaded ${dest}, size: ${buffer.length}`);
}

async function main() {
  try {
    // Download real nad-module.png
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/0700b74c3d17877c148bedb997d21add1456bddb/public/nad-module.png`, './public/nad-module.png');
    
    // Download real phones-controller.png and phones-settings.png
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/674d089d5c714f28c5fdfd2db63c55cf44ad5ffe/public/phones-controller.png`, './public/phones-controller.png');
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/674d089d5c714f28c5fdfd2db63c55cf44ad5ffe/public/phones-settings.png`, './public/phones-settings.png');
  } catch (e) {
    console.error(e);
  }
}

main();
