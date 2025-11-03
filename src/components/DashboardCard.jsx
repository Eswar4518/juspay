import React from "react";

function DashboardCard({ title, value, icon }) {
  return (
    <div className="dashboard-card p-4 bg-white rounded shadow flex items-center">
      {icon && <span className="mr-3">{icon}</span>}
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-2xl">{value}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
