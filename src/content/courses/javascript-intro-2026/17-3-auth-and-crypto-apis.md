---
description: (Pro) 掌握最高等級的安全開發。學習使用 Web Crypto API 處理敏感數據，並深入探討 JWT 認證流程與現代 Auth 框架實作。
duration: 30:00
level: intermediate
tags:
- Crypto API
- Authentication
- JWT
tier: pro
title: "17-3 (付費) 加密基石：Web Crypto 與現代認證"
youtubeId: 
---

# 17-3 (付費) 加密基石：Web Crypto 與現代認證

<div class="teacher-script-box">
 👋 **老師的話 (Script)**:
 "歡迎來到安全世界的深水區。
 當你在處理用戶密碼、機密訊息時，你必須學會與二進位數據打交道。
 
 這一章我們不只是要講理論，
 我們要學習如何使用瀏覽器內建的 **Web Crypto API** 來產生雜湊 (Hash) 或是金鑰。
 同時，我也會幫你梳理當前最火紅的認證架構：為什麼大家都在用 JWT？
 以及像 **Better Auth** 這種現代套件到底是怎麼保護我們的。"
</div>

## 1. Web Crypto API

這是不需要安裝任何 library 就能使用的原生加密 API。

### 生成密碼雜湊 (SHA-256)
```javascript
async function hashMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
```

## 2. JWT (JSON Web Token) 的原理

JWT 並不是用來「隱藏」資料（內容是 Base64，誰都看得到），而是用來「驗證」資料。
- **Header**: 選算法
- **Payload**: 放資料 (如 userID)
- **Signature**: 加密簽名 (只有伺服器有密鑰)

## 3. 2026 認證新趨勢：Passkeys (WebAuthn)

告別密碼！學習如何利用用戶的手機臉部辨識 (FaceID) 或指紋來直接登入你的網站。

<div class="interactive-lab">
 🧪 <strong>Lab 45: 雜湊計算機</strong>
 試著利用上面提供的 <code>hashMessage</code> 函數，
 計算出你名字的 SHA-256 碼，並去網路上的 SHA-256 比對網站看看結果是否一致。
</div>

---

<div class="next-step-teaser">
 🎓 <strong>本章總結</strong>
 恭喜你！你已經具備了守護 Web 應用的能力。
 
 現在，準備迎接最後一章：<strong>實戰：現代應用架構與未來趨勢</strong>。
 我們要把前面學到的所有拼圖，拼成一張完整的宏偉地圖。
</div>
