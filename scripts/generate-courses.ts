import fs from 'fs';
import path from 'path';

// 手動定義的課程數據，從 https://course.andys.pro/ 提取
const coursesList = [
  {
    title: "JavaScript 程式語言網頁設計入門",
    slug: "javascript-intro",
    description: "從零開始學習 JavaScript，打造互動式網頁應用",
    level: "beginner",
    duration: "11小時25分鐘",
    tier: "free",
    tags: ["JavaScript", "HTML", "CSS", "前端"],
    price: undefined,
  },
  {
    title: "React 基礎入門",
    slug: "react-basics",
    description: "從零開始學習 React，打造你的第一個應用",
    level: "beginner",
    duration: "8小時",
    tier: "free",
    tags: ["React", "JavaScript", "前端"],
    price: undefined,
  },
  {
    title: "Next.js 進階開發",
    slug: "nextjs-advanced",
    description: "深入學習 Next.js，構建生產級別的應用",
    level: "advanced",
    duration: "12小時",
    tier: "pro",
    tags: ["Next.js", "React", "全棧"],
    price: 99,
  },
];

async function generateCourseMD(course: typeof coursesList[0]) {
  const frontmatter = `---
title: "${course.title}"
description: "${course.description}"
level: "${course.level}"
duration: "${course.duration}"
tier: "${course.tier}"
tags: [${course.tags.map(t => `"${t}"`).join(', ')}]
${course.price ? `price: ${course.price}` : ''}
---

# ${course.title}

## 課程簡介

${course.description}

## 📚 課程大綱

- 模組 1：基礎概念
- 模組 2：核心功能
- 模組 3：實戰項目
- 模組 4：最佳實踐
- 模組 5：部署上線

## 💡 學習目標

完成本課程後，你將能夠：
- 掌握 ${course.tags[0]} 的核心概念
- 構建實際應用
- 理解最佳實踐
- 為職業發展做準備

## 🎯 適合對象

- 具有基本 JavaScript 知識的開發者
- 想進階學習現代前端框架的程式設計師
- 準備轉職成為專業開發者的學習者

## 📖 課程資源

本課程包含：
- 完整的視頻教程
- 詳細的課堂筆記
- 實戰項目練習
- 社群支持

**課程時長：** ${course.duration}
**難度級別：** ${course.level}
`;

  return frontmatter;
}

async function createCourseFiles() {
  const coursesDir = path.join(process.cwd(), 'src/content/courses');
  
  // 確保目錄存在
  if (!fs.existsSync(coursesDir)) {
    fs.mkdirSync(coursesDir, { recursive: true });
  }

  // 生成課程文件
  for (const course of coursesList) {
    // 跳過已存在的文件
    const fileName = `${course.slug}.md`;
    const filePath = path.join(coursesDir, fileName);
    
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${fileName} 已存在，跳過`);
      continue;
    }

    const content = await generateCourseMD(course);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ 創建 ${fileName}`);
  }

  console.log('\n✅ 課程文件生成完成！');
}

// 執行
createCourseFiles().catch(console.error);
