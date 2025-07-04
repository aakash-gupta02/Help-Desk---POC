import {
  ClipboardCheck,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    title: "Assigned Tickets",
    value: 14,
    icon: <ClipboardCheck className="w-6 h-6 text-white" />,
    bg: "bg-tech",
  },
  {
    title: "Pending Tickets",
    value: 5,
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-secondary",
  },
  {
    title: "Resolved Tickets",
    value: 27,
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    bg: "bg-primary",
  },
  {
    title: "Escalated Tickets",
    value: 2,
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    bg: "bg-warning",
  },
];

export default function TechMainDashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-textPrimary">
        Technical Dashboard Overview
      </h2>

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
