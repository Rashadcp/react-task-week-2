import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login"); // redirect to login after register
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required className="input" />
        <input type="email" placeholder="Email" required className="input" />
        <input type="password" placeholder="Password" required className="input" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
