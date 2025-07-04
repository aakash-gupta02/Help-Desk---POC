const sampleLogs = Array.from({ length: 8 }, (_, i) => ({
  id: i + 101,
  action: ["Created ticket", "Edited profile", "Logged in", "Closed ticket"][i % 4],
  user: `user${(i % 5) + 1}`,
  time: `2025-07-${String(i + 1).padStart(2, "0")} 10:${i + 1} AM`,
}));

const AdminLogs = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">User Log History</h2>
      <ul className="space-y-4">
        {sampleLogs.map((log) => (
          <li
            key={log.id}
            className="bg-bgLight border border-border p-4 rounded-md shadow-sm"
          >
            <p className="text-sm">
              <span className="font-semibold text-primary">{log.user}</span>{" "}
              {log.action}
            </p>
            <p className="text-xs text-textSecondary mt-1">{log.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminLogs;
