import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Login() {
  const { handleLogin } = useContext(AuthContext);
  const [authMode, setAuthMode] = useState("login");

  const toggleAuthMode = () =>
    setAuthMode((authMode) => (authMode == "login" ? "signup" : "login"));

  return authMode === "login" ? (
    <LoginForm onSignUp={toggleAuthMode} />
  ) : (
    <SignUpForm onLogin={toggleAuthMode} />
  );
}

function SignUpForm({ onLogin }) {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input placeholder="First Name"></input>
      </div>
      <div>
        <input placeholder="Last Name"></input>
      </div>
      <div>
        <input placeholder="Email"></input>
      </div>
      <div>
        <input placeholder="Password"></input>
      </div>
      <button>Create Account</button>
      <button onClick={onLogin}>Already have an account? Login</button>
    </div>
  );
}

function LoginForm({ onSignUp }) {
  return (
    <div>
      <h1>Log in</h1>
      <div>
        <input placeholder="Email"></input>
      </div>
      <div>
        <input placeholder="Password"></input>
      </div>
      <button>Login</button>
      <button onClick={onSignUp}>Don't have an account? Signup</button>
    </div>
  );
}
