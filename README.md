# AI-Driven Career Guidance & Learning System ✅

**AI-Driven Career Guidance & Learning System** is a web application that provides personalized career suggestions, course recommendations, and learning resources using an LLM (via OpenRouter) and the YouTube Data API. The project includes a simple single-page frontend and an Express.js backend that interacts with external APIs to generate recommendations.

---

## 🔧 Features

- **Career predictions**: Generates suggested career titles, descriptions, required skills, industries, and growth opportunities based on user input.
- **Course recommendations**: Suggests relevant courses based on skills and interests.
- **YouTube search**: Returns relevant videos for learning resources.
- Simple **single-page** frontend served from `public/`.

---

## 🧩 Tech Stack

- **Node.js** + **Express**
- **node-fetch** for server-side HTTP
- **dotenv** for environment variables
- Frontend: HTML/CSS/vanilla JS (in `public/`)
- External APIs: OpenRouter (LLM) and Google YouTube Data API

---

## ⚙️ Requirements

- Node.js (recommended 14+)
- npm
- API keys:
  - `OPENROUTER_API_KEY` (OpenRouter / LLM)
  - `YOUTUBE_API_KEY` (YouTube Data API)

Tip: There is an `api_keys.env` file included — copy/rename it to `.env` as a starting point and fill in your keys (do not commit real keys).

---

## 🚀 Getting Started (local)

1. Install dependencies:

```powershell
npm install
```

2. Create a `.env` file in the project root with the following variables:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
YOUTUBE_API_KEY=your_youtube_api_key_here
PORT=3000
```

3. Start the app (development):

```powershell
npm start
```

4. Open your browser at: `http://localhost:3000`

---

## 🧭 API Endpoints

All endpoints are mounted under `/api`.

- POST `/api/career-predictions`
  - Request body example:
  ```json
  {
    "name": "Alice",
    "education": "B.Sc. Computer Science",
    "skills": ["javascript","machine learning"],
    "interests": ["data","ai"]
  }
  ```
  - Response: `{ "prediction": "...LLM content..." }`

- GET `/api/youtube-videos?query=your search here`
  - Returns a list of YouTube search results (max 5 results by default).

- POST `/api/course-recommendations`
  - Request body example:
  ```json
  {
    "skills": ["python","data analysis"],
    "interests": ["data science","visualization"]
  }
  ```
  - Response: `{ "recommendations": "...LLM content..." }`

---

## 🔍 Debugging & Troubleshooting

- The server logs environment variables at startup to confirm keys are loaded. If any API call fails, check your network and key validity.
- If you see `Failed to fetch ...` errors from the server, verify that `OPENROUTER_API_KEY` and `YOUTUBE_API_KEY` are set and valid.

---

## ♻️ Deployment Notes

- Provide environment variables in your hosting environment.
- Use a process manager (PM2, Docker, etc.) for production — avoid `nodemon` in production.

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repo
2. Create a branch
3. Open a pull request with a clear description

---

## 📄 License

This project uses the **ISC** license (see `package.json`).

---

If you'd like, I can add example curl commands, Postman collection, or inline API tests — tell me which you'd prefer. 💡

