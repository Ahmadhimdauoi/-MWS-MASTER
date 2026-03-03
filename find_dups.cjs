const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /question:\s*["']([^"']+)["']/g;
const questionsRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?question:\s*["']([^"']+)["']/g;

const questions = [];
const seen = new Set();
const duplicates = [];

let match;
while ((match = questionsRegex.exec(content)) !== null) {
    const qId = match[1];
    const qText = match[2].trim();

    if (seen.has(qText)) {
        duplicates.push({ id: qId, text: qText });
    } else {
        seen.add(qText);
    }
}

console.log('Total unique questions:', seen.size);
console.log('Duplicates found:', duplicates.length);
duplicates.forEach(d => console.log(`- ID: ${d.id}, Text: ${d.text}`));
