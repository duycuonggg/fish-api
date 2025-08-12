# 🐠 fish-api

A RESTful API built with Node.js and Express, designed to manage fish-related data.  
Maintained by **duycuonggg**

## 🚀 Features

- Modular API structure
- MongoDB integration
- Environment-based configuration
- Request validation using Joi
- Babel ES6+ support
- Eslint for code quality
- Nodemon for development

## 🧰 Scripts

- `npm run dev`: Run development server with Babel and Nodemon
- `npm run build`: Transpile ES6+ to commonJS and output to `/build`
- `npm run production`: Build and run the production server
- `npm run lint`: Check code style using ESLint

## 📦 Installation

```bash
git clone https://github.com/<your-repo>/fish-api.git
cd fish-api
npm install
cp .env.example .env
npm run dev

🔧 Requirements
- Node.js >=18.x
- MongoDB (local or cloud instance)
📁 Project Structure
fish-api/
├── src/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── models/
├── build/
├── .env
└── README.md


📑 License
This project is private and not licensed for public use.
All rights reserved by duycuonggg.

---

## 📦 Giải thích Dependencies

| Package               | Mục đích sử dụng |
|----------------------|------------------|
| `@babel/runtime`     | Hỗ trợ Babel để xử lý các async/await và polyfill khi build |
| `async-exit-hook`    | Gắn các sự kiện khi ứng dụng thoát (exit) để cleanup |
| `cors`               | Cho phép gọi API từ domain khác |
| `cross-env`          | Thiết lập 

