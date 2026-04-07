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
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/02f6b937b7684130efc438652f56e213711fd9d5/public/websitelogo.png`, './public/websitelogo.png');
  } catch (e) {
    console.error(e);
  }
}

main();
