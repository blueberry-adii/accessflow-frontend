import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./wrappers/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        }
      />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
