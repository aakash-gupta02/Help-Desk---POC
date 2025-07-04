import {
  Ticket,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Tickets",
    value: 124,
    icon: <Ticket className="w-6 h-6 text-white" />,
    bg: "bg-primary",
  },
  {
    title: "Pending Tickets",
    value: 37,
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-secondary",
  },
  {
    title: "Resolved Tickets",
    value: 83,
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    bg: "bg-tech",
  },
  {
    title: "Total Users",
    value: 18,
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-user",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-textPrimary">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ title, value, icon, bg }) => (
          <div
            key={title}
            className="flex items-center justify-between bg-bgLight border border-border rounded-xl p-5 shadow-sm"
          >
            <div>
              <p className="text-sm text-textSecondary">{title}</p>
              <p className="text-2xl font-bold text-textPrimary">{value}</p>
            </div>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${bg}`}
            >
              {icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
