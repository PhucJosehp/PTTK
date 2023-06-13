import React from "react";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";
import Searchbar from "../components/Searchbar";
import add from "../assets/icon/Add.png";

const Services = () => {
  return (
    <div className="services">
      <Sidebar />
      <div className="services__view">
        <Showinf name="SERVIECES" />
        <div className="services__view__search-area">
          <Searchbar name="Customer ID" />
          <Searchbar name="Services ID" />
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
            <li style={{ marginLeft: -100 }}>Service ID</li>
            <li style={{ marginLeft: -70 }}>Service Name</li>
            <li style={{ marginLeft: 40 }}>Price</li>
            <li>Quantity</li>
            <li>Date</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
