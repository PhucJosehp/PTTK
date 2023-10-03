import { React, useState, useEffect } from "react";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";
import Searchbar from "../components/Searchbar";
import ROOM from "../assets/icon/Rooms.png";

import axios from "axios";

const Rooms = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5000/room")
      .then((res) => {
        setRecords(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const rooms = [
    {
      id: 1,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P001",
    },
    {
      id: 2,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P002",
    },
    {
      id: 3,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P003",
    },
    {
      id: 4,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P004",
    },
    {
      id: 5,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P005",
    },
    {
      id: 6,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P006",
    },
    {
      id: 7,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P007",
    },
    {
      id: 8,
      state: "Vacancy",
      cusName: "Joseph Tran",
      rm: "P008",
    },
    {
      id: 9,
      state: "In use",
      cusName: "Joseph Tran",
      rm: "P009",
    },
    {
      id: 10,
      state: "In use",
      cusName: "Joseph Tran",
      rm: "P010",
    },
    {
      id: 11,
      state: "In use",
      cusName: "Joseph Tran",
      rm: "P011",
    },
    {
      id: 12,
      state: "In use",
      cusName: "Joseph Tran",
      rm: "P012",
    },
  ];

  const getDataSearch = (data) => {
    setRecords(data);
  };

  const check = (con) => {
    if (con === "Còn") return true;
    else return false;
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

        <div className="room__view__showroom">
          {records.map((room) => (
            <div key={room.MaPhong} className="room__view__showroom__item">
              <div className="room__view__showroom__item__icon">
                <img className="room-img" src={ROOM} alt="room" />
                <div>{room.MaPhong}</div>
              </div>
              <div className="room__view__showroom__item__cusname">
                {room.HoTen}
              </div>
              <div className="room__view__showroom__item__cover">
                <div
                  className={
                    check(room.TinhTrangPhong)
                      ? "room__view__showroom__item__state--empty"
                      : "room__view__showroom__item__state--use"
                  }
                >
                  {room.TinhTrangPhong}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
