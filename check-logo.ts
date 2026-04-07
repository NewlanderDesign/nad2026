import fs from 'fs';

async function checkCommit(sha: string) {
  const res = await fetch(`https://api.github.com/repos/NewlanderDesign/nad2026/commits/${sha}`);
  const data = await res.json();
  const file = data.files?.find((f: any) => f.filename === 'public/websitelogo.png');
  if (file) {
    console.log(`Commit ${sha} has websitelogo.png with blob sha ${file.sha}`);
    const blobRes = await fetch(`https://api.github.com/repos/NewlanderDesign/nad2026/git/blobs/${file.sha}`);
    const blobData = await blobRes.json();
    if (blobData.encoding === 'base64') {
      const buffer = Buffer.from(blobData.content, 'base64');
      console.log(`  Size: ${buffer.length}, first bytes: ${buffer.slice(0, 8).toString('hex')}`);
    }
  } else {
    console.log(`Commit ${sha} does not modify websitelogo.png`);
  }
}

async function main() {
  await checkCommit('02f6b937b7684130efc438652f56e213711fd9d5');
  await checkCommit('35b9e8923164a915fe0386afdd13ff7b4144bcff');
  await checkCommit('c79486f94d90fb8e982d0e9d4bcc4d0822645516');
  await checkCommit('ef611f724c929e646c62b247b3faadbbcc58d080');
}

main();
