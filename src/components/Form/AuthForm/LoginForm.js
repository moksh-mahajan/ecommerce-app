import { useContext, useState } from "react";
import authImg from "../../../assets/svgs/authImg.svg";
import { AuthContext } from "../../../contexts";
import "./AuthForm.css";

export default function LoginForm({ onSignUp }) {
  const [form, setForm] = useState({});
  const { handleLogin } = useContext(AuthContext);

  return (
    <div className="auth-section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(form);
        }}
        className="auth-form"
      >
        <div className="auth-heading">
          <h3>Login</h3>
          <img className="auth-img" src={authImg} alt="authentication img" />
        </div>

        <div className="auth-input">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="auth-field"
            type="email"
            id="email"
            placeholder="Enter your email here"
          />
        </div>

        <div className="auth-input">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="auth-field"
            type="password"
            id="password"
            placeholder="*******"
          />
        </div>

        <div className="auth-footer">
          <button type="submit" className="auth-btn">
            Login
          </button>
          <span>Don't have an account?</span>
          <button onClick={onSignUp} type="button" className="auth-link">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
