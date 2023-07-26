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

const Sidebar = ({ children }) => {
  const itemtab = [
    {
      id: 1,
      path: "/",
      name: "Dashboard",
      img: dashboard,
    },
    {
      id: 2,
      path: "/Checkin",
      name: "Check in",
      img: checkin,
    },
    {
      id: 3,
      path: "/Rooms",
      name: "Rooms",
      img: rooms,
    },
    {
      id: 4,
      path: "/Services",
      name: "Services",
      img: services,
    },
    {
      id: 5,
      path: "/Tours",
      name: "Tours",
      img: tours,
    },
    {
      id: 6,
      path: "/Payment",
      name: "Payment",
      img: payment,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="logo" className="sidebar__logo__logo" />
        <h2 className="sidebar__logo__name">Hotelier360</h2>
      </div>

      <div className="sidebar__tab">
        {itemtab.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className="sidebar__tab__detail"
            activeclassname="active"
          >
            <img
              src={item.img}
              alt="dashboard icon"
              className="sidebar__icon"
            />
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
