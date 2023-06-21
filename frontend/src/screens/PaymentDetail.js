import React from "react";
import Sidebar from "../components/Sidebar";
import Showinf from "../components/Showinf";
import back from "../assets/icon/Back.png";
import { NavLink } from "react-router-dom";

const PaymentDetail = () => {
  const currentDate = new Date();
  return (
    <div className="PaymentDetail">
      <Sidebar />
      <div className="PaymentDetail__view">
        <Showinf name="PAYMENT DETAIL" />
        <div className="PaymentDetail__view__data">
          <div className="PaymentDetail__view__data__infcus">
            <div className="PaymentDetail__view__data__infcus__1st">
              <div className="PaymentDetail__view__data__infcus__1st__ID">
                Bill ID
                <div style={{ marginLeft: "80px", fontWeight: "bold" }}>
                  HD0001
                </div>
              </div>
              <div className="PaymentDetail__view__data__infcus__1st__date">
                {currentDate.toDateString()}
              </div>
            </div>
            <div className="PaymentDetail__view__data__infcus__2nd">
              <div className="PaymentDetail__view__data__infcus__2nd__ID">
                Customer ID
                <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
                  KH0001
                </div>
              </div>
              <div className="PaymentDetail__view__data__infcus__2nd__name">
                Customer Name
                <div style={{ marginLeft: "20px", fontWeight: "bold" }}>
                  Josehp Tran
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="PaymentDetail__view__data__money">
              <div className="PaymentDetail__view__data__money__title">
                Rooms
                <div className="PaymentDetail__view__data__money__cover">
                  <div className="PaymentDetail__view__data__money__name">
                    Room1 - Room2
                  </div>
                  <div className="PaymentDetail__view__data__money__name">
                    500000d
                  </div>
                </div>
              </div>
              <div className="PaymentDetail__view__data__money__title">
                Services
                <div className="PaymentDetail__view__data__money__cover">
                  <div className="PaymentDetail__view__data__money__name">
                    Room1 - Room2
                  </div>
                  <div className="PaymentDetail__view__data__money__name">
                    500000d
                  </div>
                </div>
              </div>
              <div className="PaymentDetail__view__data__money__title">
                Tours
                <div className="PaymentDetail__view__data__money__cover">
                  <div className="PaymentDetail__view__data__money__name">
                    Room1 - Room2
                  </div>
                  <div className="PaymentDetail__view__data__money__name">
                    500000d
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="PaymentDetail__view__data__total">
            <div style={{ fontWeight: "bold" }}>TOTAL</div>
            <div>150000d</div>
          </div>
        </div>
        <div style={{ height: "60px", width: "60px", marginLeft: "72vw" }}>
          <NavLink to={"/Payment"}>
            <img src={back} alt="add-icon" className="icon__back" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
