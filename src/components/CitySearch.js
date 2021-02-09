import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCity } from "../redux/actions";

const CitySearch = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.text);

  const handleChange = (e) => {
    dispatch(getCity(e.target.value.trim()));
  };

  return (
    <>
      <input
        className="search"
        onChange={handleChange}
        type="search"
        value={text}
        placeholder={"search"}
      />
    </>
  );
};

export default CitySearch;
