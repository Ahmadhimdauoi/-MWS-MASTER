const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Parse all question blocks with their full text range
const blocks = [];
const blockRegex = /\{\s*\n\s*id:\s*["']([^"']+)["'],?\s*\n\s*category:\s*[^,]+,?\s*\n\s*question:\s*["']([^"']+)["']/g;
let m;
while ((m = blockRegex.exec(content)) !== null) {
    blocks.push({ id: m[1], question: m[2].trim(), index: m.index });
}

console.log('Total questions parsed:', blocks.length);

// Normalize function: strip punctuation, extra spaces, common prefixes
function normalize(text) {
    return text
        .replace(/؟/g, '')
        .replace(/\?/g, '')
        .replace(/^ما هو /g, '')
        .replace(/^ما هي /g, '')
        .replace(/^ما معنى /g, '')
        .replace(/^ما وظيفة /g, '')
        .replace(/^ما دور /g, '')
        .replace(/^كيف يعمل /g, '')
        .replace(/^ما الفرق الجوهري /g, 'ما الفرق ')
        .replace(/ في CSS/g, '')
        .replace(/ في JavaScript/g, '')
        .replace(/ في البرمجة/g, '')
        .replace(/ في لغات البرمجة/g, '')
        .replace(/ في سياق لغات البرمجة/g, '')
        .replace(/ في تطوير الويب/g, '')
        .replace(/ في HTTP/g, '')
        .replace(/ في طلبات HTTP/g, '')
        .replace(/ في OSI/g, '')
        .replace(/ في الشبكات/g, '')
        .replace(/ في المترجمات/g, '')
        .replace(/ من منظور الشبكات/g, '')
        .replace(/الـ /g, '')
        .replace(/ال/g, '')
        .replace(/بروتوكول /g, '')
        .replace(/هيكل /g, '')
        .replace(/عنوان /g, '')
        .replace(/نظام /g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

const seen = new Map();
const duplicateIds = new Set();

for (const block of blocks) {
    const norm = normalize(block.question);
    if (seen.has(norm)) {
        duplicateIds.add(block.id);
        console.log(`DUPLICATE: [${block.id}] "${block.question}" ~= [${seen.get(norm).id}] "${seen.get(norm).question}"`);
    } else {
        seen.set(norm, block);
    }
}

console.log('\nDuplicate IDs to remove:', duplicateIds.size);

if (duplicateIds.size === 0) {
    console.log('No duplicates found!');
    process.exit(0);
}

// Remove duplicates from file
const lines = content.split('\n');
let inDuplicateBlock = false;
let braceDepth = 0;
const filteredLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this line starts an object with a duplicate ID
    const idMatch = line.match(/id:\s*["']([^"']+)["']/);
    if (idMatch && duplicateIds.has(idMatch[1])) {
        // Look back to find the opening brace
        let j = filteredLines.length - 1;
        while (j >= 0 && filteredLines[j].trim() === '') j--;
        if (j >= 0 && filteredLines[j].trim() === '{') {
            filteredLines.pop(); // Remove the opening brace line
            // Also remove any blank lines before it
            while (filteredLines.length > 0 && filteredLines[filteredLines.length - 1].trim() === '') {
                filteredLines.pop();
            }
        }
        inDuplicateBlock = true;
        continue;
    }

    if (inDuplicateBlock) {
        // Wait for the closing brace of this object
        if (line.match(/^\s*\},?\s*$/)) {
            inDuplicateBlock = false;
        }
        continue;
    }

    filteredLines.push(line);
}

fs.writeFileSync(filePath, filteredLines.join('\n'));

// Verify
const newContent = fs.readFileSync(filePath, 'utf8');
const newBlocks = [];
const newBlockRegex = /question:\s*["']([^"']+)["']/g;
let nm;
while ((nm = newBlockRegex.exec(newContent)) !== null) {
    newBlocks.push(nm[1]);
}
console.log('Questions remaining after cleanup:', newBlocks.length);
