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
    // The user uploaded nad-module.png in a62fbf71ace611117956571b562d70ba52252b7c
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/a62fbf71ace611117956571b562d70ba52252b7c/public/nad-module.png`, './public/nad-module.png');
    
    // The user uploaded phones-controller.png and phones-settings.png in e3b2063f2fe25a143706a3f747cc3f83718f7128
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/e3b2063f2fe25a143706a3f747cc3f83718f7128/public/phones-controller.png`, './public/phones-controller.png');
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/e3b2063f2fe25a143706a3f747cc3f83718f7128/public/phones-settings.png`, './public/phones-settings.png');
    
    // websitelogo.png hasn't been updated recently, but let's grab it from main without query params
    await download(`https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/websitelogo.png`, './public/websitelogo.png');
  } catch (e) {
    console.error(e);
  }
}

main();
