import React from "react";

const Searchbar = (props) => {
  return (
    <div className="searchbar">
      <div className="searchbar__name">{props.name}</div>
      <input placeholder="Search..." className="searchbar__search" />
    </div>
  );
};

export default Searchbar;
