import fs from 'fs';

async function download(url: string, dest: string) {
  const res = await fetch(url + '?t=' + Date.now()); // cache buster for fetch
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
  console.log(`Downloaded ${dest}, size: ${buffer.length}`);
}

async function main() {
  try {
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/nad-module.png`, './public/nad-module.png');
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/phones-controller.png`, './public/phones-controller.png');
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/phones-settings.png`, './public/phones-settings.png');
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/websitelogo.png`, './public/websitelogo.png');
  } catch (e) {
    console.error(e);
  }
}

main();
