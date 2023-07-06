import React from "react";
import { useState, useEffect } from "react";

function Searchbar(props) {
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDisplaydata(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [displayData, setDisplaydata] = useState([]);

  const handleSearch = (val) => {
    const res = displayData.filter((f) => f[props.search].includes(val));
    props.onChange(res);
  };

  return (
    <div className="searchbar">
      <div className="searchbar__name">{props.name}</div>
      <input
        placeholder="Search..."
        className="searchbar__search"
        onChange={(change) => handleSearch(change.target.value)}
      />
    </div>
  );
}

export default Searchbar;
