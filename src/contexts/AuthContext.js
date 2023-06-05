import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    case "AUTH_SUCCESS":
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
    toast.success("Logged out!");
  };

  const handleSignUp = async ({ email, password, firstName, lastName }) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        }),
      });

      if (response.status === 201) {
        const data = await response.json();
        const token = data.encodedToken;

        console.log("Token gotten from signup: ", token);

        // Save token to local storage
        localStorage.setItem("loginToken", token);

        dispatch({ type: "AUTH_SUCCESS", payload: token });
        toast.success("Signed up successfully!");
        navigate("/products");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log(response);

      if (response.status === 200) {
        const data = await response.json();
        const token = data.encodedToken;

        // Save token to local storage
        localStorage.setItem("loginToken", token);

        dispatch({ type: "AUTH_SUCCESS", payload: token });
        toast.success("Logged in successfully!");
        navigate("/products");
      }
      if (response.status === 404) {
        toast.error("Incorrect email or password!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        handleLogin,
        handleCheckAuthStatus,
        handleLogout,
        handleSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
