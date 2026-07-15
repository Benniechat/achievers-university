const fs = require('fs');

function processFile(path) {
  let content = fs.readFileSync(path, 'utf8');
  if (!content.includes('<img')) return;
  
  if (!content.includes('next/image')) {
    // Add import after the last import statement
    const lines = content.split('\n');
    let lastImport = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        lastImport = i;
      }
    }
    if (lastImport !== -1) {
      lines.splice(lastImport + 1, 0, 'import Image from "next/image";');
    } else {
      lines.unshift('import Image from "next/image";');
    }
    content = lines.join('\n');
  }
  
  content = content.replace(/<img([^>]*)>/g, (match, p1) => {
    let w = 800, h = 600;
    if (p1.includes('w-10 h-10') || p1.includes('h-10 w-10')) { w = 40; h = 40; }
    else if (p1.includes('logo.png')) { w = 200; h = 48; }
    else if (p1.includes('h-8 w-auto')) { w = 150; h = 32; }
    else if (p1.includes('w-full h-full')) { w = 600; h = 400; }
    
    // Convert data-alt to alt if it doesn't have an alt
    if (!/alt=/.test(p1)) {
        p1 += ' alt=""';
    }
    
    // Ensure self closing if it wasn't
    if (p1.endsWith('/')) {
        p1 = p1.slice(0, -1);
    }
    
    return `<Image${p1} width={${w}} height={${h}} />`;
  });
  
  fs.writeFileSync(path, content);
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

let nextConfig = fs.readFileSync('./next.config.mjs', 'utf8');
if (!nextConfig.includes('images')) {
  nextConfig = nextConfig.replace('const nextConfig = {};', `const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};`);
  fs.writeFileSync('./next.config.mjs', nextConfig);
}

console.log('Done fixing images');
