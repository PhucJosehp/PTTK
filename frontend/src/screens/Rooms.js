import { React, useState } from "react";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";
import Searchbar from "../components/Searchbar";

const Rooms = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const getDataSearch = (data) => {
    setRecords(data);
  };
  return (
    <div className="room">
      <Sidebar />
      <div className="room__view">
        <Showinf name="ROOM" />
        <div className="room__view__search-area">
          <Searchbar
            name="Customer ID"
            search="MaKH"
            onChange={getDataSearch}
          />
          <Searchbar
            name="Customer name"
            search="HoTen"
            onChange={getDataSearch}
          />
        </div>

        <div className="room__view__showroom"></div>
      </div>
    </div>
  );
};

export default Rooms;
