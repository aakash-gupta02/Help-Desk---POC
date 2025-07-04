import {
  UserCircle,
  FileWarning,
  Database,
  FileClock,
} from "lucide-react";

const adminStats = [
  {
    title: "Total Users",
    value: "1,452",
    icon: <UserCircle className="w-6 h-6 text-white" />,
    bg: "bg-primary",
  },
  {
    title: "Open Tickets",
    value: "312",
    icon: <FileWarning className="w-6 h-6 text-white" />,
    bg: "bg-secondary",
  },
  {
    title: "DB Collections",
    value: "9",
    icon: <Database className="w-6 h-6 text-white" />,
    bg: "bg-tech",
  },
  {
    title: "Log Events Today",
    value: "638",
    icon: <FileClock className="w-6 h-6 text-white" />,
    bg: "bg-admin",
  },
];

export default function AdminMain() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-textPrimary">
        Admin Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map(({ title, value, icon, bg }) => (
          <div
            key={title}
            className="flex items-center justify-between bg-bgLight border border-border rounded-xl p-5 shadow-sm"
          >
            <div>
              <p className="text-sm text-textSecondary">{title}</p>
              <p className="text-2xl font-bold text-textPrimary">{value}</p>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bg}`}>
              {icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
