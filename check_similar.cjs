const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const questionsRegex = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?question:\s*["']([^"']+)["']/g;

const ObjectArray = [];
let match;
while ((match = questionsRegex.exec(content)) !== null) {
    ObjectArray.push({ id: match[1], text: match[2].trim() });
}

const normalize = (text) => {
    return text.replace(/[\u0600-\u06FF\s]+$/g, '').replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '').toLowerCase();
}

const seen = new Map();
for (const item of ObjectArray) {
    const norm = normalize(item.text);
    if (seen.has(norm)) {
        console.log(`Duplicate found!`);
        console.log(`1. [${seen.get(norm).id}] ${seen.get(norm).text}`);
        console.log(`2. [${item.id}] ${item.text}`);
        console.log('---');
    } else {
        seen.set(norm, item);
    }
}
