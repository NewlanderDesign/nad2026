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
  try {
    // Fetch the latest tree from main branch
    const res = await fetch('https://api.github.com/repos/NewlanderDesign/nad2026/git/trees/main?recursive=1');
    const data = await res.json();
    
    // Find all PNGs
    const pngs = data.tree.filter((t: any) => t.path.endsWith('.png'));
    console.log('Found PNGs in repo:', pngs.map((t: any) => t.path));

    // Download them all to public/
    for (const png of pngs) {
      const fileName = png.path.split('/').pop();
      const rawUrl = `https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/${png.path}`;
      await download(rawUrl, `./public/${fileName}`);
    }
  } catch (e) {
    console.error(e);
  }
}

main();
