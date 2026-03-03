const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /question:\s*['"](.*?)['"]/g;
let match;
let found = 0;
while ((match = regex.exec(content)) !== null) {
    if (match[1].includes('Media Queries')) {
        console.log('Found:', match[1]);
        found++;
    }
}
console.log('Total Media Queries occurrences:', found);
