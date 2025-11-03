import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar w-64 bg-slate-100 h-screen p-4">
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
