# ✅ AI-Driven Career Guidance & Learning System

An **AI-powered web application** that provides **personalized career guidance**, **course recommendations**, and **learning resources** using a **Large Language Model (LLM)** via **OpenRouter** and the **YouTube Data API**.

The system features a simple **single-page frontend** and an **Express.js backend** that interacts with external APIs to generate intelligent, user-specific recommendations.

---

## 🚀 Features

- 🎯 **Career Predictions**
  - Suggested career titles
  - Role descriptions
  - Required skills
  - Relevant industries and growth opportunities

- 📚 **Course Recommendations**
  - AI-curated courses based on user skills and interests

- 🎥 **YouTube Learning Resources**
  - Fetches relevant educational videos using the YouTube Data API

- 🖥️ **Single-Page Frontend**
  - Lightweight UI built with HTML, CSS, and vanilla JavaScript

---

## 🧩 Tech Stack

### Backend
- Node.js
- Express.js
- node-fetch
- dotenv

### Frontend
- HTML
- CSS
- Vanilla JavaScript (served from `/public`)

### External APIs
- OpenRouter (LLM)
- YouTube Data API

---

## ⚙️ Requirements

- Node.js (v14+ recommended)
- npm
- API keys:
  - `OPENROUTER_API_KEY`
  - `YOUTUBE_API_KEY`

> 📌 **Tip:**  
> An `api_keys.env` file is included. Copy or rename it to `.env` and add your API keys.  
> **Never commit real API keys to version control.**

---

## 🛠️ Getting Started (Local Setup)

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Configure Environment Variables

Create a .env file in the project root:

OPENROUTER_API_KEY=your_openrouter_api_key_here
YOUTUBE_API_KEY=your_youtube_api_key_here
PORT=3000
3️⃣ Start the Server
npm start

4️⃣ Open in Browser
http://localhost:3000

🧭 API Endpoints

All API endpoints are prefixed with /api.

🔹 POST /api/career-predictions

Request Body

{
  "name": "Alice",
  "education": "B.Sc. Computer Science",
  "skills": ["javascript", "machine learning"],
  "interests": ["data", "ai"]
}


Response

{
  "prediction": "AI-generated career guidance..."
}

🔹 POST /api/course-recommendations

Request Body

{
  "skills": ["python", "data analysis"],
  "interests": ["data science", "visualization"]
}


Response

{
  "recommendations": "AI-generated course suggestions..."
}

🔹 GET /api/youtube-videos

Query Example

/api/youtube-videos?query=machine+learning+basics


Response

Returns up to 5 relevant YouTube videos

🔍 Debugging & Troubleshooting

Environment variables are logged at server startup

If API calls fail:

Check API key validity

Confirm .env file exists

Verify internet connectivity

Common error:

Failed to fetch ...


➡ Usually caused by missing or invalid API keys.

♻️ Deployment Notes

Set environment variables on your hosting provider

Use a process manager like:

PM2

Docker

❌ Avoid using nodemon in production

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch

Commit your changes

Open a pull request with a clear description

📄 License

This project is licensed under the ISC License
See package.json for details.

💡 Optional Enhancements

You can extend this project with:

cURL examples

Postman collection

Automated API tests

Improved frontend UI

Docker configuration

Feel free to contribute or suggest improvements 🚀


If you want, I can also:
- Add **badges** (Node version, license, API)
- Create a **clean folder structure section**
- Optimize it for **GitHub stars & recruiters**
- Write a **project description for resumes**

Just say the word 👍
