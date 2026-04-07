import fs from 'fs';

async function main() {
  const res = await fetch('https://api.github.com/repos/NewlanderDesign/nad2026/git/trees/main?recursive=1');
  const data = await res.json();
  const pngs = data.tree.filter((t: any) => t.path.endsWith('.png'));
  console.log(pngs.map((t: any) => t.path));
}
main();
