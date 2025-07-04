import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const roles = [
    { label: "User", path: "/user/dashboard", color: "bg-primary" },
    { label: "Technical", path: "/technical/dashboard", color: "bg-tech" },
    { label: "Operations", path: "/operation/dashboard", color: "bg-operations" },
    { label: "Admin", path: "/admin/dashboard", color: "bg-admin" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-bgDark text-textPrimary">
      <div className="bg-bgLight p-10 rounded-xl shadow-lg max-w-md w-full text-center border border-border">
        <h1 className="text-3xl font-bold mb-6 text-primary">HelpDesk Portal</h1>
        <p className="text-textSecondary mb-8">Choose your role to continue:</p>

        <div className="space-y-4">
          {roles.map(({ label, path, color }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className={`w-full py-2 rounded-md font-medium text-white ${color} hover:opacity-90 transition`}
            >
              Go to {label} Dashboard
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
