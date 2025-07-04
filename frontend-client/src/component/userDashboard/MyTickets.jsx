import { BadgeCheck, Clock, AlertCircle } from "lucide-react";

const sampleTickets = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  subject: `Issue ${i + 1}: Something went wrong`,
  category: ["Bug", "Account Issue", "Request", "Other"][i % 4],
  priority: ["Low", "Medium", "High"][i % 3],
  status: ["Open", "In Progress", "Closed"][i % 3],
  createdAt: `2025-07-${String(i + 1).padStart(2, "0")}`,
}));

const priorityColor = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  High: "bg-red-100 text-red-700",
};

const statusColor = {
  Open: "bg-blue-100 text-blue-700",
  "In Progress": "bg-orange-100 text-orange-700",
  Closed: "bg-gray-200 text-gray-600",
};

export default function MyTickets() {
  return (
    <div>
      <h2 className="text-xl font-bold text-textPrimary mb-6">My Tickets</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-border bg-bgLight rounded-lg shadow-sm">
          <thead className="bg-bgDark">
            <tr>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">#</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Subject</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Category</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Priority</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Status</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Created</th>
            </tr>
          </thead>
          <tbody>
            {sampleTickets.map((ticket, idx) => (
              <tr
                key={ticket.id}
                className="border-t border-border hover:bg-bgDark transition"
              >
                <td className="px-4 py-3 text-sm">{idx + 1}</td>
                <td className="px-4 py-3 text-sm text-primary font-medium">{ticket.subject}</td>
                <td className="px-4 py-3 text-sm">{ticket.category}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColor[ticket.priority]}`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[ticket.status]}`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{ticket.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
