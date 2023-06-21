import React from "react";
import "../scss/screen.scss";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Showinf from "../components/Showinf";
import add from "../assets/icon/Add.png";

const Payment = () => {
  return (
    <div className="Payment">
      <Sidebar />
      <div className="Payment__view">
        <Showinf name="PAYMENT" />
        <div className="Payment__view__search-area">
          <Searchbar name="Customer ID" />
          <Searchbar name="Bill ID" />
          <Searchbar name="Date" />
          <div className="coverIcon">
            <NavLink to={"/Payment/Detail"} activeclassname="None">
              <img
                src={add}
                alt="add-icon"
                className="Payment__view__search-area__icon icon"
              />
            </NavLink>
          </div>
        </div>

        <div className="Payment__view__showdata">
          <ul className="Payment__view__showdata__title">
            <li style={{ marginLeft: -60 }}>Customer ID</li>
            <li style={{ marginLeft: -100 }}>Bill ID</li>
            <li style={{ marginLeft: -70 }}>Payment methods</li>
            <li style={{ marginLeft: 40 }}>Total</li>
            <li>Status</li>
            <li>Date</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
