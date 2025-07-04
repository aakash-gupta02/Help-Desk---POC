// AdminDatabase.jsx
const sampleUsers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  username: `user${i + 1}`,
  email: `user${i + 1}@mail.com`,
  role: ["User", "Tech", "Operations", "Admin"][i % 4],
}));

const AdminDatabase = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">User Database</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-bgLight border border-border rounded-lg shadow">
          <thead className="bg-bgDark">
            <tr>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">ID</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Username</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Email</th>
              <th className="text-left px-4 py-3 text-sm text-textSecondary">Role</th>
            </tr>
          </thead>
          <tbody>
            {sampleUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t border-border hover:bg-bgDark transition"
              >
                <td className="px-4 py-3 text-sm">{user.id}</td>
                <td className="px-4 py-3 text-sm text-primary font-medium">{user.username}</td>
                <td className="px-4 py-3 text-sm">{user.email}</td>
                <td className="px-4 py-3 text-sm">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDatabase;
