import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function RequiresAuth({ children }) {
  const location = useLocation();
  const {
    state: { encodedToken },
  } = useContext(AuthContext);

  const isLoggedIn = encodedToken.length !== 0;

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
