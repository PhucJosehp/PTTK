import React from "react";
import Sidebar from "../components/Sidebar";
import "../scss/screen.scss";
import Showinf from "../components/Showinf";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__view">
        <Showinf name="CUSTOMER INFORMATION" />
      </div>
    </div>
  );
};

export default Dashboard;
