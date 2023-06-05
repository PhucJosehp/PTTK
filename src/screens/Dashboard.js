import React from "react";
import Sidebar from "../components/Sidebar";
import "../scss/screen.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__view">Hi</div>
    </div>
  );
};

export default Dashboard;
