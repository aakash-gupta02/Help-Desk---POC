import { useState } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const filteredTickets = sampleTickets.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTickets.length / limit);
  const paginatedTickets = filteredTickets.slice(
    (page - 1) * limit,
    page * limit
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // reset to page 1 on search
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
    setPage(1); // reset to page 1 on limit change
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-textPrimary mb-4">My Tickets</h2>

      {/* Search + Limit */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by subject or category"
          className="w-full sm:w-1/2 px-4 py-2 border border-border rounded-md bg-bgDark text-textPrimary"
        />

        <div className="flex items-center gap-2">
          <label htmlFor="limit" className="text-sm text-textSecondary">
            Show:
          </label>
          <select
            id="limit"
            value={limit}
            onChange={handleLimitChange}
            className="px-3 py-1 border border-border rounded-md bg-bgDark text-textPrimary"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      {/* Table */}
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
            {paginatedTickets.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-5 text-textSecondary">
                  No tickets found.
                </td>
              </tr>
            ) : (
              paginatedTickets.map((ticket, idx) => (
                <tr
                  key={ticket.id}
                  className="border-t border-border hover:bg-bgDark transition"
                >
                  <td className="px-4 py-3 text-sm">{(page - 1) * limit + idx + 1}</td>
                  <td className="px-4 py-3 text-sm text-primary font-medium">{ticket.subject}</td>
                  <td className="px-4 py-3 text-sm">{ticket.category}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColor[ticket.priority]}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[ticket.status]}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{ticket.createdAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded-md text-sm ${
                page === i + 1
                  ? "bg-primary text-white"
                  : "bg-bgDark border border-border text-textPrimary"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
