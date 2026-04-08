const fs = require('fs');

try {
  if (fs.existsSync('out')) {
    // Copy the 'out' directory to 'build' and 'dist' to satisfy various hosting providers
    fs.cpSync('out', 'build', { recursive: true });
    fs.cpSync('out', 'dist', { recursive: true });
    console.log('Successfully copied out/ to build/ and dist/ directories for Hostinger compatibility.');
  } else {
    console.log('No out/ directory found. Next.js export may have failed.');
  }
} catch (error) {
  console.error('Error copying output directories:', error);
}
