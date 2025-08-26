# 臺灣永續農業減碳發展協會 官方網站

此專案包含協會官方靜態網站的基本骨架，採用 HTML5、CSS3、原生 JavaScript 撰寫，並符合《網站規格書 v1.0》及《程式碼撰寫指南 v0》要求。

## 專案結構
```
tsadca-site/
├── index.html
├── about.html
├── contact.html
├── privacy.html
├── terms.html
├── news/
│   └── index.html
├── research/
│   └── index.html
├── resources/
│   └── index.html
├── podcast/
│   └── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── hero-banner.jpg (placeholder)
```

## 如何使用
1. 將整個 `tsadca-site` 資料夾部署至 Cloudflare Pages。
2. 確保 DNS A/CNAME 記錄已指向 Cloudflare Pages 提供的 URL。
3. 若要啟用聯絡表單後端功能，請參考 Cloudflare Workers 文件撰寫對應的 API 端點並更新 `main.js` 內的 `fetch` URL。

## 待辦
- 製作完整的內容素材（文字、圖片）。
- 補足新聞、研究、資源等子頁面細節。
- 撰寫 Cloudflare Worker 處理表單提交與驗證。

