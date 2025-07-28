import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import DashboardHome from "./pages/DashboardHome";
import DashboardInfo from "./pages/DashboardInfo";

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
      >
        <Route index element={<DashboardHome />} />
        <Route path="home" element={<DashboardHome />} />
        <Route path="info" element={<DashboardInfo />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
