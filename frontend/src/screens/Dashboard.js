import { React, useEffect, useState } from "react";
import axios from "axios";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";
import Searchbar from "../components/Searchbar";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        setRecords(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // Calculate total pages based on data length and items per page
  const totalPages = Math.ceil(records.length / itemsPerPage);

  // Get the current page's data based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = records.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <li style={{ marginLeft: -40 }}>Customer ID</li>
            <li style={{ marginLeft: -70 }}> Customer name</li>
            <li style={{ marginLeft: 50, marginRight: 80 }}>ID card</li>
            <li style={{ marginLeft: -20, marginRight: -60 }}>Gender</li>
            <li style={{ marginRight: -15 }}>Phone number</li>
          </ul>
          <div>
            {currentItems.map((record, index) => (
              <ul
                className="dashboard__view__showdata__displaydata"
                key={record.MaKH}
              >
                <li className="data_ID">{record.MaKH}</li>
                <li className="data_Name">{record.HoTen}</li>
                <li className="data_CMMD">{record.CMMD}</li>
                <li className="data_GT">{record.GIOITINH}</li>
                <li className="data_SDT">{record.SDT}</li>
              </ul>
            ))}
          </div>
          <div className="dashboard__view__showdata__displaydata__pagenum">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  className="dashboard__view__showdata__displaydata__page"
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  activeclassname="active-num"
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
