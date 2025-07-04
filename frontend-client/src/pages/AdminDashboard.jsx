import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Database,
  FileClock,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

// Component placeholders
import AdminMain from "../component/adminDashboard/AdminMain";
// import AdminSettings from "../component/adminDashboard/AdminSettings";
// import AdminDatabase from "../component/adminDashboard/AdminDatabase";
// import AdminLogs from "../component/adminDashboard/AdminLogs";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuth();

  const menuItems = [
    { label: "Dashboard", value: "dashboard", icon: LayoutDashboard },
    { label: "Settings", value: "settings", icon: Settings },
    { label: "Database", value: "database", icon: Database },
    { label: "User Logs", value: "logs", icon: FileClock },
  ];

  return (
    <div className="flex h-screen bg-bgDark text-textPrimary">
      {/* Sidebar */}
      <div className="w-64 bg-bgLight border-r border-border flex flex-col fixed h-full">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <h1
            onClick={() => navigate("/")}
            className="text-xl font-bold text-admin cursor-pointer"
          >
            Helpdesk Admin
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4 space-y-1">
            {menuItems.map(({ label, value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setActiveMenu(value)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg ${
                  activeMenu === value
                    ? "bg-accent text-black"
                    : "hover:bg-bgDark text-textPrimary"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-border">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-4 py-2 w-full text-left text-admin rounded-lg hover:bg-bgDark"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 bg-bgLight border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
          <h2 className="text-lg font-medium text-textPrimary">
            Welcome Admin, {user.username}
          </h2>
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-admin/10 flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.pravatar.cc/300?img=12"
                  alt="Profile"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <span>{user.username}</span>
              <ChevronDown
                className={`w-4 h-4 text-textSecondary transition-transform ${
                  isProfileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow z-20 py-1">
                {["Your Profile", "Settings", "Billing", "Sign out"].map(
                  (item, idx) => (
                    <a
                      href="#"
                      key={item}
                      className={`block px-4 py-2 text-sm ${
                        item === "Sign out"
                          ? "text-warning hover:bg-red-50"
                          : "text-textPrimary hover:bg-bgDark"
                      } ${idx === 3 ? "border-t border-border mt-1" : ""}`}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-bgDark">
          {activeMenu === "dashboard" && <AdminMain />}
          {/* {activeMenu === "settings" && <AdminSettings />}
          {activeMenu === "database" && <AdminDatabase />}
          {activeMenu === "logs" && <AdminLogs />} */}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
