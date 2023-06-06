import React from "react";
import bell from "../assets/icon/Bell.png";
import user from "../assets/icon/User.png";

const Showinf = (props) => {
  const currentDate = new Date();

  return (
    <div className="showinf">
      <div className="showinf__inf">
        <div>
          <div className="showinf__inf__name">Hello, Tran Hong Minh Phuc</div>
          <div className="showinf__inf__date">{currentDate.toDateString()}</div>
        </div>
        <div>
          <img src={bell} alt="bell icon" className="showinf__inf__icon" />
          <img src={user} alt="user icon" className="showinf__inf__icon" />
        </div>
      </div>

      <div className="showinf__screen-name">{props.name}</div>
    </div>
  );
};

export default Showinf;
