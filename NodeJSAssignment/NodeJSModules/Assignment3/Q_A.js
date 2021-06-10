const fs = require('fs')

const dir = 'Views'

try {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }
} catch (err) {
  console.error(err)
}

///${dir}/index.html
fs.writeFile(`${dir}/index.html`, '<h1>Hello there!</h1>', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });