import React from "react";
import "../scss/screen.scss";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";

const Checkin = () => {
  const itemLeft = [
    {
      id: 1,
      name: "Customer ID",
    },
    {
      id: 2,
      name: "Full name",
    },
    {
      id: 3,
      name: "ID card",
    },
    {
      id: 4,
      name: "Gender",
    },
    {
      id: 5,
      name: "Date begin",
    },
    {
      id: 6,
      name: "Date end",
    },
  ];

  const itemRight = [
    {
      id: 1,
      name: "Rooms",
    },
    {
      id: 2,
      name: "Special requirements",
    },
    {
      id: 3,
      name: "Payment methods",
    },
    {
      id: 4,
      name: "Payment",
    },
  ];
  return (
    <div className="checkin">
      <Sidebar />
      <div className="checkin__view">
        <Showinf name="CHECK IN" />

        <div className="checkin__view__inputdata">
          <div>
            {itemLeft.map((item, index) => (
              <div className="checkin__view__inputdata__nameLeft">
                {item.name}
                <input className="checkin__view__inputdata__input" />
              </div>
            ))}
          </div>

          <div className="checkin__view__inputdata__right">
            {itemRight.map((item, index) => (
              <div className="checkin__view__inputdata__nameRight">
                {item.name}
                <input className="checkin__view__inputdata__input" />
              </div>
            ))}
            <div
              style={{
                height: "130px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="checkin__confirmbtn">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
