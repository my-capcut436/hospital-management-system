# Hospital Management System

A full-stack hospital management system built with Node.js + Express and a plain HTML/CSS/JavaScript frontend.

## Features
- Admin login
- Patient management
- Doctor management
- Appointment booking
- Medical records
- Billing overview
- Dashboard analytics

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: PostgreSQL (optional, with in-memory fallback for demo mode)
- Styling: Custom responsive UI with orange, purple, and white theme

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open the app in the browser:
   - http://localhost:5000

## Default Admin Login
- Email: `admin@hospital.com`
- Password: `admin123`

## Project Structure
```text
hospital-management-system/
├── backend/
│   └── server.js
├── frontend/
│   ├── app.js
│   ├── index.html
│   └── style.css
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Notes
This version is designed as a working demo project. It includes a PostgreSQL-ready backend pattern, but also supports in-memory sample data when no PostgreSQL connection is configured, so the app can run immediately.

## License
MIT
