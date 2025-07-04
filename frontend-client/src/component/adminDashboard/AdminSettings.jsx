// AdminSettings.jsx
import { useState } from "react";

const AdminSettings = () => {
  const [maintenance, setMaintenance] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Admin Settings</h2>

      <div className="space-y-6">
        <div className="flex items-center justify-between bg-bgLight p-4 rounded-lg border border-border">
          <div>
            <p className="font-medium">Maintenance Mode</p>
            <p className="text-sm text-textSecondary">Temporarily disable user access</p>
          </div>
          <input
            type="checkbox"
            checked={maintenance}
            onChange={() => setMaintenance(!maintenance)}
            className="w-5 h-5 accent-primary"
          />
        </div>

        <div className="flex items-center justify-between bg-bgLight p-4 rounded-lg border border-border">
          <div>
            <p className="font-medium">Email Alerts</p>
            <p className="text-sm text-textSecondary">Enable system notifications</p>
          </div>
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
            className="w-5 h-5 accent-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
