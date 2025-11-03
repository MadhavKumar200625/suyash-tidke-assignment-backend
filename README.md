# Stock Watchlist Backend

This is the backend API for the **Stock Watchlist** web app — a simple, secure MERN-stack project that allows users to add and view their favorite stock symbols.

It’s built using **Node.js + Express.js**, connected to **MongoDB Atlas**, and deployed on **Vercel**.

---

## Features

- **Add Stocks:**  
  Users can add stock symbols (like `AAPL`, `GOOGL`, `TCS`) to their personal watchlist.

- **View Watchlist:**  
  Fetches all saved stocks from the database in sorted order.

- **Validation & Security:**  
  stock symbols are restricted to **1–5 uppercase letters only** (for example: `AAPL`, `GOOGL`).

- **Secure REST API:**  
  Protected against injection, xss, and rate-limit abuse.

- **CORS Enabled:**  
  Configurable CORS origin for safe connection with the frontend.

- **Production-ready setup:**  
  Handles compression, sanitization, and error logging gracefully.

---

## Tech Stack

| Layer | Technology |
|--------|-------------|
| Runtime | Node.js (v18+) |
| Framework | Express.js (v4) |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Security | Helmet, XSS-Clean, Express-Mongo-Sanitize |
| Rate Limiting | express-rate-limit |
| Compression | compression |
| Validation | express-validator |
| Deployment | Railway |
| Version Control | Git + GitHub |

---

## Security Features

- **Input Sanitization:**  
  All requests are cleaned using `express-mongo-sanitize` and `xss-clean` to prevent malicious payloads.

- **Validation Rules:**  
  - Only uppercase A–Z characters (1–5 length) are allowed in stock symbols.
  - Invalid inputs return a 400 response.

- **Rate Limiting:**  
  Prevents DDoS / brute-force attacks with a per-minute request cap.

- **Helmet Middleware:**  
  Adds industry-standard HTTP security headers.

- **CORS Configuration:**  
  Allows only the defined frontend origin (like `http://localhost:3000` or your deployed frontend URL).

---

## ⚙️ Environment Variables

Create a `.env` file in your root directory:

```bash
PORT=3001
MONGODB_URI=<your_mongodb_connection_string>
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=100
