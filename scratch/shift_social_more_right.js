const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  'className="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-12 xl:-translate-y-16 lg:translate-x-6 xl:translate-x-10 2xl:translate-x-12"',
  'className="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-12 xl:-translate-y-16 lg:translate-x-12 xl:translate-x-16 2xl:translate-x-20"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully shifted social media list further to the right!');
