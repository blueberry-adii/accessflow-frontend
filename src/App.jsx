import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
