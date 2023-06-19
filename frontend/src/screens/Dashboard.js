import { React, useEffect, useState } from "react";
import axios from "axios";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__view">
        <Showinf name="CUSTOMER INFORMATION" />
        <div className="dashboard__view__search-area">
          <Searchbar name="Customer ID" />
          <Searchbar name="Customer name" />
          <Searchbar name="ID Card" />
          <Searchbar name="Phone number" />
        </div>

        <div className="dashboard__view__showdata">
          <ul className="dashboard__view__showdata__title">
            <li style={{ marginLeft: -70 }}>Customer ID</li>
            <li style={{ marginLeft: -30 }}>Customer name</li>
            <li style={{ marginLeft: 70 }}>ID card</li>
            <li>Gender</li>
            <li>Phone number</li>
          </ul>
          <div>
            {records.map((record, index) => (
              <ul
                className="dashboard__view__showdata__displaydata"
                key={index}
              >
                <li>{record.MaKH}</li>
                <li>{record.HoTen}</li>
                <li>{record.CMND}</li>
                <li>{record.GIOITINH}</li>
                <li>{record.SDT}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
