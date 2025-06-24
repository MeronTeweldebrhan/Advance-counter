# AdvanceCounter 🧮

A feature-rich React counter app with persistent local storage, count history, and step customization. Built to demonstrate React hooks, local storage handling, and basic UI best practices.

## 🚀 Features

-  **Increment / Decrement** counter
-  **Reset** count and history
-  **Step value** customization
-  **Count history tracking**
-  **Persistent state** using `localStorage`

## 📸 Preview

![screenshot](./src/assets/Screenshot%202025-06-23%20203447.png) <!-- optional if you add a screenshot -->

## 📦 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript 
- Custom `useLocalStorage` hook

## 🔧 How It Works

- App loads initial state from `localStorage`.
- Each count change updates both the display and history.
- Local storage keeps data across page reloads.
- The history list scrolls if it exceeds the container height.

## 🧑‍💻 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/advance-counter.git
   cd advance-counter
## Useful Resources
Here are some helpful resources used or referenced during development:
- 📘 MDN – localStorage
   Official docs for localStorage, including getItem, setItem, 
- ⚛️ React Docs – useEffect
  Understand side effects, dependency arrays, and cleanup functions.
- 🧩 Custom Hook Activity – 
  ([Lesson3](https://ps-lms.vercel.app/curriculum/se/416/lesson-3))
  Covers building and using the useLocalStorage hook to persist state.
