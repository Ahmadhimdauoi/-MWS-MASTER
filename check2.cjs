const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'constants.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const questionsRegex = /\{\s*id:\s*['"]([^'"]+)['"][\s\S]*?question:\s*["']([^"']+)["'][\s\S]*?answer:\s*["']([^"']+)["']/g;

const questions = [];
let ObjectArray = [];
let match;
while ((match = questionsRegex.exec(content)) !== null) {
    ObjectArray.push({ id: match[1], qText: match[2].trim(), aText: match[3].trim() });
}

console.log('Total matches found via regex:', ObjectArray.length);

const aTextSet = new Set();
const duplicateATexts = [];
for (const item of ObjectArray) {
    if (item.aText.includes('تُستخدم لتطبيق أنماط مختلفة بناءً')) {
        console.log(item);
    }
}
