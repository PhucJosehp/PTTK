import React from "react";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";

const Rooms = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__view">
        <Showinf name="ROOM" />
      </div>
    </div>
  );
};

export default Rooms;
