const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const questionsRegex = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?question:\s*["']([^"']+)["']/g;

const seen = new Set();
const duplicateIds = new Set();

let match;
while ((match = questionsRegex.exec(content)) !== null) {
    const qId = match[1];
    const qText = match[2].trim();

    if (seen.has(qText)) {
        duplicateIds.add(qId);
    } else {
        seen.add(qText);
    }
}

console.log('Duplicate IDs found:', duplicateIds.size);

const lines = content.split('\n');
let inDuplicateBlock = false;
const filteredLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.match(/^\s*\{\s*$/) && lines[i + 1] && lines[i + 1].includes('id:')) {
        const idMatch = lines[i + 1].match(/id:\s*['"]([^'"]+)['"]/);
        if (idMatch && duplicateIds.has(idMatch[1])) {
            inDuplicateBlock = true;
        }
    }

    if (!inDuplicateBlock) {
        filteredLines.push(line);
    }

    if (inDuplicateBlock && line.match(/^\s*\},\s*$/)) {
        inDuplicateBlock = false;
    }
}

fs.writeFileSync('constants.tsx', filteredLines.join('\n'));
console.log('Cleaned up constants. Remaining questions:', seen.size);
