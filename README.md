# 📰 NewsMonkey

NewsMonkey is a lightweight React-based web application that displays the latest news articles fetched from the [NewsAPI](https://newsapi.org/). It supports light/dark mode, category-based filtering, pagination, a responsive layout, and auto API key fallback when request limits are hit.

---

## 🚀 Features

- 🌐 **Live News Fetching** — Powered by [NewsAPI](https://newsapi.org/)
- 🔍 **Search Functionality** — Search news by keyword
- 🗂️ **Category Filter** — Easily browse topics like Business, Sports, Tech, and more
- 🔁 **Pagination** — Navigate through pages of articles
- 🌗 **Dark & Light Themes** — Toggle themes for better readability
- 📱 **Responsive Layout** — Mobile-friendly UI using Bootstrap
- 🔼 **Back to Top Button** — Smooth scroll to top after browsing
- 🧠 **API Key Failover** — Automatically switches to the next API key if one exceeds daily request limit
- 📰 **Dynamic Ads Panel** — Side panel with placeholder ads (collapsible on mobile)
- 🧩 **Modular Architecture** — Clean, component-based design using React Router

---

## ⚙️ Installation

Make sure you have **Node.js** and **npm** installed.

```bash
git clone https://github.com/sthaaayush/News-Monkey.git
cd News-Monkey
npm install
npm i react-router-dom bootstrap-icons
npm start
```

---

## 📁 Folder Highlights

```text
src/
├── App.js                 # Handles routing, theme state, API logic, and pagination
└── Components/
    ├── NewsComponent.js   # Main container for fetching and displaying articles
    ├── NewsItem.js        # Individual article cards
    ├── Navbar.js          # Navigation bar with theme toggle and search
    ├── SidePanel.js       # Category filter panel
    ├── Home.js            # Landing page with app intro and CTA
    └── Home.js            # About page with app intro and dummy text
```

---
