const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages', 'content');
const destDir = path.join(__dirname, 'src', 'content', 'blog');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.astro'));

for (const file of files) {
    const filePath = path.join(srcDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract title
    const titleMatch = content.match(/const title = "(.*?)";/);
    const title = titleMatch ? titleMatch[1] : file.replace('.astro', '');

    // Extract content between const content = ` and `;
    let rawContent = '';
    const contentStart = content.indexOf('const content = `');
    if (contentStart !== -1) {
        const contentTextStart = contentStart + 'const content = `'.length;
        let contentTextEnd = content.indexOf('`;\n---', contentTextStart);
        if (contentTextEnd === -1) {
            contentTextEnd = content.indexOf('`;\r\n---', contentTextStart);
        }
        rawContent = content.substring(contentTextStart, contentTextEnd).trim();
    }

    // Clean up any stray tags at the bottom like *Published: 2026-02-18*
    let pubDate = new Date().toISOString();
    const pubDateMatch = rawContent.match(/\*Published:\s*(.*?)\*/);
    if (pubDateMatch) {
        pubDate = new Date(pubDateMatch[1]).toISOString();
        rawContent = rawContent.replace(pubDateMatch[0], '');
    }

    let tags = ['tech'];
    const tagsMatch = rawContent.match(/\*Tags:\s*(.*?)\*/);
    if (tagsMatch) {
        tags = tagsMatch[1].split(',').map(t => t.trim());
        rawContent = rawContent.replace(tagsMatch[0], '');
    }

    const markdown = `---
title: "${title}"
description: "${title}"
pubDate: "${pubDate}"
tags: ${JSON.stringify(tags)}
draft: false
---

${rawContent.trim()}
`;

    const destPath = path.join(destDir, file.replace('.astro', '.md'));
    fs.writeFileSync(destPath, markdown);
    console.log(`Migrated ${file} -> ${destPath}`);
}
