import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Login() {
  const { handleLogin } = useContext(AuthContext);
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
