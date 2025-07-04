import {
  CheckSquare,
  ClipboardList,
  CheckCircle,
  Timer,
} from "lucide-react";

const opsStats = [
  {
    title: "Pending Approvals",
    value: 8,
    icon: <CheckSquare className="w-6 h-6 text-white" />,
    bg: "bg-operations",
  },
  {
    title: "My Active Tickets",
    value: 12,
    icon: <ClipboardList className="w-6 h-6 text-white" />,
    bg: "bg-primary",
  },
  {
    title: "Resolved Tickets",
    value: 22,
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    bg: "bg-tech",
  },
  {
    title: "Avg. Resolution Time",
    value: "3h 40m",
    icon: <Timer className="w-6 h-6 text-white" />,
    bg: "bg-secondary",
  },
];

export default function OperationsMain() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-textPrimary">
        Operations Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {opsStats.map(({ title, value, icon, bg }) => (
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
