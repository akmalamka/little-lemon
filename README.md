# 🍋 Little Lemon Reservation App

A React-based restaurant reservation app built with **Vite**, **Formik**, **Yup**, and **React Testing Library**.  
This project is part of the Coursera *Meta Front-End Developer* course, showcasing best practices in component-based UI and form validation.

---

## 🚀 Features
- 🏠 Homepage with Hero, Specials, Testimonials, and About sections
- 📅 Booking form with:
  - Date, time, guests, and occasion fields
  - HTML5 validation
  - Custom validation using Yup
  - Real-time available times fetched from API
- ✅ Unit tests with Vitest and React Testing Library

---

## 🛠️ Tech Stack
- **React 18**
- **Vite** (fast dev server & bundler)
- **Formik** (form handling)
- **Yup** (validation schema)
- **React Testing Library** + **Vitest** + **Jest DOM** (unit testing)

---

## 📂 Project Structure
src/
├── assets/ # Images, logos
├── components/ # React components
│ ├── Booking/ # BookingForm and tests
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Hero.jsx
│ └── Specials.jsx
├── utils/ # Utility functions (e.g., API, times reducer)
├── App.jsx
└── main.jsx


---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/akmalamka/little-lemon.git
cd little-lemon
```

### 2. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

## 🧪 Running Tests

This project uses Vitest with React Testing Library.

### Run all tests
```bash
npm test
```

### Watch mode (re-runs on file changes)
```bash
npm run test:watch
```