const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../rs-refer/abvtek.com');
const destDir = path.join(__dirname, 'public');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    // Rename _next to ref-assets to prevent Next.js build errors
    const destName = entry.name === '_next' ? 'ref-assets' : entry.name;
    const destPath = path.join(dest, destName);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Function to replace strings in files
function processFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processFiles(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.html', '.js', '.css', '.json'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let originalContent = content;
        
        // Replace _next with ref-assets to match renamed folder
        content = content.replace(/\/_next\//g, '/ref-assets/');
        content = content.replace(/_next\//g, 'ref-assets/');
        
        // Branding Replacements
        content = content.replace(/AbvTek/g, 'Akhil Promoters');
        content = content.replace(/Abvtek/g, 'Akhil Promoters');
        content = content.replace(/ABVTEK/g, 'AKHIL PROMOTERS');
        
        // Projects replacements
        content = content.replace(/Greenstone Equity Partners office/g, 'Akhil Heights');
        content = content.replace(/Ina Office/g, 'The Residency');
        content = content.replace(/Lucky Punch Gym/g, 'Eco Retreat');
        
        // Color replacements
        content = content.replace(/#0c5563/gi, '#E53935'); // accent
        content = content.replace(/#dbdee3/gi, '#F3F1EE'); // light stone
        content = content.replace(/#494e54/gi, '#2F343C'); // charcoal

        // Video path
        content = content.replace(/https:\/\/cp\.abvtek\.com\/assets\/home-page\/website-intro-video\.mp4/g, '/website-intro-video.mp4');

        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }
}

console.log('Copying files from reference site...');
copyDir(srcDir, destDir);

console.log('Applying branding and color replacements...');
processFiles(destDir);

console.log('Done!');
