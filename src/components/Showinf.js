import React from "react";

const Showinf = () => {
  const currentDate = new Date();

  return (
    <div className="showinf">
      <div className="showinf__inf">
        <div className="showinf__inf__name">Hello, Tran Hong Minh Phuc</div>
        <div className="showinf__inf__date">{currentDate.toDateString()}</div>
      </div>
    </div>
  );
};

export default Showinf;
