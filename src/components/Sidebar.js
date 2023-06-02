import React from "react";
import "../scss/components.scss";
import "../assets/image/logo.png";
import { NavLink } from "react-router-dom";

import logo from "../assets/image/logo.png";
import dashboard from "../assets/icon/Dashboard.png";
import checkin from "../assets/icon/Checkin.png";
import rooms from "../assets/icon/Rooms.png";
import services from "../assets/icon/Services.png";
import tours from "../assets/icon/Tours.png";
import payment from "../assets/icon/Payment.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="logo" className="sidebar__logo__logo" />
        <h2 className="sidebar__logo__name">P.T.D.H</h2>
      </div>

      <div className="sidebar__tab">
        <NavLink to="/" className="sidebar__tab__detail">
          <img src={dashboard} alt="dashboard icon" className="sidebar__icon" />
          Dashboard
        </NavLink>

        <NavLink to="/Checkin" className="sidebar__tab__detail">
          <img src={checkin} alt="checkin icon" className="sidebar__icon" />
          Check in
        </NavLink>

        <NavLink to="/Rooms" className="sidebar__tab__detail">
          <img src={rooms} alt="rooms icon" className="sidebar__icon" />
          Rooms
        </NavLink>

        <NavLink to="/Services" className="sidebar__tab__detail">
          <img src={services} alt="services icon" className="sidebar__icon" />
          Services
        </NavLink>

        <NavLink to="/Tours" className="sidebar__tab__detail">
          <img src={tours} alt="tours icon" className="sidebar__icon" />
          Tours
        </NavLink>

        <NavLink to="/Payment" className="sidebar__tab__detail">
          <img src={payment} alt="payment icon" className="sidebar__icon" />
          Payment
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
