import React from "react";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__view">
        <Showinf name="CUSTOMER INFORMATION" />
        <div className="search-area">
          <Searchbar name="Customer ID" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
