import React from "react";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Showinf from "../components/Showinf";
import add from "../assets/icon/Add.png";

const Tours = () => {
  return (
    <div className="services">
      <Sidebar />
      <div className="services__view">
        <Showinf name="TOURS" />
        <div className="services__view__search-area">
          <Searchbar name="Customer ID" />
          <Searchbar name="Tour ID" />
          <Searchbar name="Date" />
          <img
            src={add}
            alt="addi-icon"
            className="services__view__search-area__icon icon"
          />
        </div>

        <div className="services__view__showdata">
          <ul className="services__view__showdata__title">
            <li style={{ marginLeft: -60 }}>Customer ID</li>
            <li style={{ marginLeft: -100 }}>Tour ID</li>
            <li style={{ marginLeft: -70 }}>Tour Name</li>
            <li style={{ marginLeft: 40 }}>Number of people</li>
            <li>Price</li>
            <li>Date</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tours;
