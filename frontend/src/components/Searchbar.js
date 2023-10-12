import React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiFilledInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
    "& input": {
      backgroundColor: "#ffffff", // Change the input background color
      borderRadius: "10px",
    },
  },
});

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
      <CssTextField
        label="Search"
        className="searchbar__search"
        variant="filled"
        onChange={(change) => handleSearch(change.target.value)}
      />
    </div>
  );
}

export default Searchbar;
