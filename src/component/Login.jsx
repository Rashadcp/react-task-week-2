import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home"); // redirect to home after login
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required className="input" />
        <input type="password" placeholder="Password" required className="input" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
