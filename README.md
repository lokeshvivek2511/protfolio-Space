# 🚀 Lokeshwaran V - Developer Portfolio

A vibrant, animated developer portfolio built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. This portfolio showcases skills, projects, experience, and certifications through stunning visuals and interactive animations.

## 🌟 Features

- 🌌 Dark theme with vibrant accent colors
- ⚛️ Built with React, Vite & Tailwind CSS
- 🎥 Animated transitions using Framer Motion and React Awesome Reveal
- 📱 Fully responsive design
- 💼 Detailed sections for:
  - Hero / About
  - Projects
  - Internships
  - Skills
  - Education & Certifications
  - Achievements
  - Contact with EmailJS
- 📄 Resume download
- 🔗 Social profile links (GitHub, LinkedIn, LeetCode)
- 🧠 Modular architecture with reusable components and hooks
- 🧼 Clean structure ready for Netlify deployment

## 🧱 Tech Stack

| Category        | Tech                                           |
|----------------|------------------------------------------------|
| **Frontend**    | React, TypeScript, Vite, Tailwind CSS         |
| **Animation**   | Framer Motion, React Awesome Reveal           |
| **Forms**       | React Hook Form, EmailJS                      |
| **Deployment**  | Netlify                                       |

## 📁 Project Structure

```

lokeshvivek2511-portfolio-space/
├── src/
│   ├── components/
│   │   ├── sections/         # Portfolio Sections (Hero, About, Projects, etc.)
│   │   └── ui/               # Reusable UI elements
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Constants and utilities
│   ├── pages/                # 404 and other pages
│   ├── types/                # TypeScript type declarations
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
├── package.json
├── netlify.toml
└── public/

````

## 🧪 Getting Started

### 🔧 Prerequisites

- Node.js (>=18)
- npm or yarn

### 📥 Installation

```bash
git clone https://github.com/lokeshvivek2511/lokeshvivek2511-portfolio-space.git
cd lokeshvivek2511-portfolio-space
npm install
````

### 🚀 Run Locally

```bash
npm run dev
```

### 🛠 Build for Production

```bash
npm run build
```

### 👁 Preview Build

```bash
npm run preview
```

## ☁️ Deployment

This project is optimized for **Netlify**.

### Netlify Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[dev]
  command = "vite"
  targetPort = 5173
  port = 8888

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

To deploy:

* Push to GitHub
* Connect repo to Netlify
* Deploy!

## 📬 Contact Me

* 📧 Email: [lokeshvlw2004@gmail.com](mailto:lokeshvlw2004@gmail.com)
* 💼 LinkedIn: [linkedin.com/in/lokeshwaran-v-680827257](https://www.linkedin.com/in/lokeshwaran-v-680827257)
* 💻 GitHub: [@lokeshvivek2511](https://github.com/lokeshvivek2511)
* 👨‍💻 LeetCode: [Lokeshwaran\_V](https://leetcode.com/u/Lokeshwaran_V/)

## 📝 License

This portfolio is for personal showcase purposes. Please contact the author for permissions if you wish to reuse or adapt it.

---
```
> Built with ❤️ by **Lokeshwaran V** — Coffee. Code. Commit. Push.
```
