import { useState } from "react";
import { LoginForm, SignUpForm } from "../components";

export function Login() {
  const [authMode, setAuthMode] = useState("login");

  const toggleAuthMode = () =>
    setAuthMode((authMode) => (authMode == "login" ? "signup" : "login"));

  return authMode === "login" ? (
    <LoginForm onSignUp={toggleAuthMode} />
  ) : (
    <SignUpForm onLogin={toggleAuthMode} />
  );
}
