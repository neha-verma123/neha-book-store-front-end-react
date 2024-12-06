import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button
          className="loginButton"
          type="button"
          onClick={() => {
            alert("Coming Soon!");
            navigate("/");
          }}
        >
          Login
        </button>
      </form>
      <button
        className="loginRegisterButton"
        type="button"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
    </div>
  );
}
