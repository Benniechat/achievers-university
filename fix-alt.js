const fs = require('fs');

function processFile(path) {
  let content = fs.readFileSync(path, 'utf8');
  if (!content.includes('<Image')) return;
  
  // Find all <Image ... />
  // We can just globally replace <Image and check if it has alt=
  // Actually, let's use a regex that captures the whole <Image ... /> tag
  let changed = false;
  content = content.replace(/<Image([^>]+)>/g, (match, p1) => {
    // Check if alt= is present
    if (!/alt=/.test(p1)) {
        changed = true;
        // if it ends with /, insert before it
        if (p1.endsWith('/')) {
            return `<Image${p1.slice(0, -1)} alt="" />`;
        }
        return `<Image${p1} alt="">`;
    }
    return match;
  });
  
  if (changed) {
      fs.writeFileSync(path, content);
  }
}

const dir = './src';
const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else if (file.endsWith('.tsx')) {
      filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

walkSync(dir).forEach(processFile);
console.log('Fixed missing alt tags');
