import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../utils/Loading";

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          "https://accessflow-backend.onrender.com/v1/api/auth/check-auth",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (res.ok) {
          setIsAuth(true);
        } else {
          const refreshRes = await fetch(
            "https://accessflow-backend.onrender.com/v1/api/auth/refresh-token",
            {
              method: "GET",
              credentials: "include",
            }
          );
          if (refreshRes.ok) {
            setIsAuth(true);
          } else {
            setIsAuth(false);
          }
        }
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <Loading text={"Loading..."} />;

  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
}
