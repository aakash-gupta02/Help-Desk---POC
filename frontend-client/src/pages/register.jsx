import { useState } from "react";
import axios from "axios";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:3000/auth/register", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgDark flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-bgLight p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex items-center gap-3 border border-border rounded-lg px-3 py-2 bg-white">
            <User className="w-5 h-5 text-primary" />
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              required
              className="w-full bg-transparent text-textPrimary placeholder-textSecondary outline-none"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-border rounded-lg px-3 py-2 bg-white">
            <Mail className="w-5 h-5 text-primary" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-transparent text-textPrimary placeholder-textSecondary outline-none"
              value={formData.email}
              onChange={handleChange}
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
              className="w-full bg-transparent text-textPrimary placeholder-textSecondary outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Error Message */}
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
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-textSecondary">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-link cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
