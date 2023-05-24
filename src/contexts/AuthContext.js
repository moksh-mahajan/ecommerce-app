import { createContext, useReducer } from "react";

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
  }
};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

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
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ state, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
