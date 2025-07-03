# 💬 ChatGPT-Based Chatbot (Laravel + Inertia.js)

A simple chatbot web app built using **Laravel 12**, **Inertia.js**, **React**, and the **OpenAI API**.  
Users can send a message and get instant AI-powered replies using ChatGPT (gpt-3.5-turbo).

---

## 🔧 Features

- ⚡ Chat interface powered by React via Inertia.js
- 🤖 OpenAI GPT integration (`gpt-3.5-turbo`)
- 🛡️ CSRF-secured API calls
- ✅ Laravel API route for backend communication
- 🧪 Easily testable (mock mode or local AI option like Ollama)

---

## 📦 Tech Stack

**Backend:**
- Laravel 12
- PHP 8.2
- Guzzle HTTP
- OpenAI PHP SDK (`openai-php/client`)

**Frontend:**
- Inertia.js
- React.js
- Tailwind CSS (optional)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/sandeepjosan81/chatbot-laravel-inertia.git
cd chatbot-laravel-inertia


composer install
npm install

### In .env, add your API key:
cp .env.example .env
php artisan key:generate


OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### . Run the App
php artisan serve
npm run dev
