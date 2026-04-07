import fs from 'fs';

async function downloadBlob(sha: string, dest: string) {
  const res = await fetch(`https://api.github.com/repos/NewlanderDesign/nad2026/git/blobs/${sha}`);
  const data = await res.json();
  if (data.encoding === 'base64') {
    const buffer = Buffer.from(data.content, 'base64');
    fs.writeFileSync(dest, buffer);
    console.log(`Downloaded ${dest}, size: ${buffer.length}`);
  } else {
    console.error(`Failed to download blob ${sha}: not base64`);
  }
}

async function main() {
  // Get the SHA for phones-settings.png
  const res = await fetch('https://api.github.com/repos/NewlanderDesign/nad2026/contents/public/phones-settings.png');
  const data = await res.json();
  if (data.sha) {
    await downloadBlob(data.sha, './public/phones-settings.png');
  }
}

main();
