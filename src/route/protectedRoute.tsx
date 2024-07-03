import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const auth = getAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
}
