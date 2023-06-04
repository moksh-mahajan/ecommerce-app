import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

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

function SignUpForm({ onLogin }) {
  const [form, setForm] = useState({});
  const { handleSignUp } = useContext(AuthContext);

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input
          placeholder="First Name"
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Last Name"
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <button onClick={() => handleSignUp(form)}>Create Account</button>
      <button onClick={onLogin}>Already have an account? Login</button>
    </div>
  );
}

function LoginForm({ onSignUp }) {
  const [form, setForm] = useState({});
  const { handleLogin } = useContext(AuthContext);

  return (
    <div>
      <h1>Log in</h1>
      <div>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        ></input>
      </div>
      <div>
        <input
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        ></input>
      </div>
      <button onClick={() => handleLogin(form)}>Login</button>
      <button onClick={onSignUp}>Don't have an account? Signup</button>
    </div>
  );
}
