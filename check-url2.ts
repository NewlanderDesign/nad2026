async function main() {
  const url = 'https://raw.githubusercontent.com/NewlanderDesign/nad2026/main/public/nad-module.png';
  const res = await fetch(url);
  console.log('Status:', res.status);
  const buf = await res.arrayBuffer();
  console.log('Size:', buf.byteLength);
  console.log('First 8 bytes:', Buffer.from(buf).slice(0, 8));
}
main();
