import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCity } from "../redux/actions";

const CitySearch = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cityReducer.cityInfo);
  console.log(data);

  const handleSubmit = (e) => {
    dispatch(getCity(text));
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          // className="search"
          onChange={(e) => setText(e.target.value)}
          type="search"
          value={text}
          placeholder={"search"}
        />
        <button type="submit">Click to submit</button>
      </form>
      <div></div>
    </>
  );
};

export default CitySearch;
