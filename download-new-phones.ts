import fs from 'fs';

async function download(url: string, dest: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
  console.log(`Downloaded ${dest}`);
}

async function main() {
  // Download the phones-controller.png
  await download('https://raw.githubusercontent.com/NewlanderDesign/nad2026/1808957038b13b7b505be48e42e75e0b17a6567b/public/phones-controller.png', './public/phones-controller.png');
  
  // Try to download phones-settings.png just in case you uploaded it in the same commit!
  try {
    await download('https://raw.githubusercontent.com/NewlanderDesign/nad2026/1808957038b13b7b505be48e42e75e0b17a6567b/public/phones-settings.png', './public/phones-settings.png');
  } catch (e) {
    console.log('phones-settings.png not found in this commit, skipping.');
  }
}

main();
