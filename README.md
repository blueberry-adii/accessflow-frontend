# Access Flow - Frontend

This is the frontend client for the **Access Flow** application, built using **React** and **Tailwind CSS**. It handles user authentication, protected routes, dashboards, and responsive UI with minimal design.

---

## 🧠 Author - Aditya Prasad

- [LinkedIn]("https://www.linkedin.com/in/aditya-prasad-095ab9329/")
- [GitHub]("https://github.com/blueberry-adii)
- [Live Project Link]("")

---

## 🚀 Features

- 🔐 JWT-based authentication
- 🎯 Protected routes (PrivateRoute wrapper)
- 📦 React Context for global user state
- 💅 Styled with Tailwind CSS
- 🎨 Component-based modular design
- 🧭 Dynamic routing with React Router
- 🖱️ Button config and navigation via constants

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **React Router DOM**
- **Context API**
- **fetch API** (no Axios)

---

## 🧰 Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/blueberry-adii/accessflow-frontend.git

cd accessflow-frontend

npm install

npm run dev
```

## 🔐 Authentication Flow

- Tokens are stored as HTTP-only cookies (handled server-side).

- On login/register, token is set and stored.

- On logout, token is removed via POST request to backend.

- Protected routes check auth state before rendering.
