# Golmaal 🧠💻

**Golmaal** is a custom-built, interpreted programming language playground with support for dynamic typing, closures, conditionals, loops, and more. Built with a strong focus on backend architecture, Golmaal allows users to write and execute code through a user-friendly web interface, powered by a custom interpreter running on a remote Python Flask server.

---

## 🚀 Features

- Custom language with support for:
  - Dynamic types: integers, booleans, strings, arrays
  - Functions and closures
  - Built-in functions like `print` and `len`
  - Control structures: `if-else`, `while`
- Realtime code execution via API
- JSON-based communication with the interpreter
- Interactive web-based playground
- Error handling and structured output formatting
- Keep-alive mechanism to prevent backend from sleeping (Render hosting)

---

## 🛠 Tech Stack

### Frontend:
- React
- Tailwind CSS

### Backend:
- Node.js
- Express.js

### Interpreter:
- Python
- Flask

### Deployment & Utilities:
- Render (for hosting Python Flask server)
- Cron jobs (to keep backend active)
- Fetch API

