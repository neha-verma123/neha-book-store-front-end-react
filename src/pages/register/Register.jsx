import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button
          className="registerButton"
          type="button"
          onClick={() => navigate("/home")}
        >
          Register
        </button>
      </form>
      <button
        className="registerLoginButton"
        type="button"
        onClick={() => navigate("/")}
      >
        Login
      </button>
    </div>
  );
}
