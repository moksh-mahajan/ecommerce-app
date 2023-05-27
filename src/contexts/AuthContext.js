import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const initialState = {
  encodedToken: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "CHECK_AUTH_STATUS":
      return {
        encodedToken: action.payload,
      };
    case "LOGIN":
      return {
        encodedToken: action.payload,
      };

    case "LOGOUT": {
      return {
        encodedToken: "",
      };
    }
  }
};

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleCheckAuthStatus = () => {
    const token = localStorage.getItem("loginToken") ?? "";
    dispatch({ type: "CHECK_AUTH_STATUS", payload: token });
  };

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    dispatch({ type: "LOGOUT" });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: "adarshbalika@gmail.com",
          password: "adarshbalika",
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const token = data.encodedToken;

        // Save token to local storage
        localStorage.setItem("loginToken", token);

        dispatch({ type: "LOGIN", payload: token });

        navigate("/products");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{ state, handleLogin, handleCheckAuthStatus, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
