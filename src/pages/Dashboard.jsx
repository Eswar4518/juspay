import React from "react";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import { dashboardData, chartData } from "../utils/data";

function Dashboard() {
  return (
    <div className="dashboard p-8 space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {dashboardData.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
      <Chart data={chartData} />
    </div>
  );
}

export default Dashboard;
