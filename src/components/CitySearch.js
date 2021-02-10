import "../styles/search.css";

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { getCity } from "../redux/actions";

const CitySearch = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(getCity(text));
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        onChange={(e) => setText(e.target.value)}
        type="search"
        value={text}
        placeholder={"search"}
      />
      <button className="button" type="submit">
        Click to submit
      </button>
    </form>
  );
};

export default CitySearch;
