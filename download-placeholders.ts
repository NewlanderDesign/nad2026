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
  // Use placeholder images for iphone and android for now
  await download('https://picsum.photos/seed/iphone/280/580', './public/iphone.png');
  await download('https://picsum.photos/seed/android/280/580', './public/android.png');
}

main();
