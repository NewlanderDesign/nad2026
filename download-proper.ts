import fs from 'fs';

async function downloadBinary(url: string, dest: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(dest, buffer);
    console.log(`Successfully downloaded ${dest} (Size: ${buffer.length} bytes)`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error);
  }
}

async function main() {
  const baseUrl = 'https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public';
  
  await downloadBinary(`${baseUrl}/nad-module.png`, 'public/nad-module.png');
  await downloadBinary(`${baseUrl}/phones-controller.png`, 'public/phones-controller.png');
  await downloadBinary(`${baseUrl}/phones-settings.png`, 'public/phones-settings.png');
  await downloadBinary(`${baseUrl}/websitelogo.png`, 'public/websitelogo.png');
}

main();
