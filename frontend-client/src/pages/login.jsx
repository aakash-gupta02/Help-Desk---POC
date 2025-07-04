import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock } from "lucide-react";


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post(
        "http://localhost:3000/auth/login",
        form
      );

      console.log(data);
      
      login(data.user, data.token); 
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#55D6C2] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-bgLight p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Helpdesk System
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="flex items-center gap-3 border border-border rounded-lg px-3 py-2 bg-white">
            <Mail className="w-5 h-5 text-primary" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent text-textPrimary placeholder-textSecondary outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 border border-border rounded-lg px-3 py-2 bg-white">
            <Lock className="w-5 h-5 text-primary" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full bg-transparent text-textPrimary placeholder-textSecondary outline-none"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-warning text-sm text-center font-medium">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-accent text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-textSecondary">
          <span
            onClick={() => navigate("/auth/forgot")}
            className="text-link hover:underline cursor-pointer"
          >
            Forgot password?
          </span>
          <span
            onClick={() => navigate("/register")}
            className="text-link hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>

  );
};

export default Login;
