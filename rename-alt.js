const fs = require('fs');

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

walkSync(dir).forEach(path => {
  let content = fs.readFileSync(path, 'utf8');
  if (content.includes('data-alt=')) {
    content = content.replace(/data-alt=/g, 'alt=');
    fs.writeFileSync(path, content);
  }
});
console.log('Renamed data-alt to alt');
