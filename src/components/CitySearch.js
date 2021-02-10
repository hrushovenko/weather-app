import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCity } from "../redux/actions";
// import { Chart } from "./Chart";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CitySearch = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cityReducer.cityInfo);

  const data1 = [];
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let prevDate = "";

  for (const key in data) {
    let day = new Date(data[key].dt_txt);
    // console.log(day.toString("ddd mmm dd yyyy HH:MM:ss"));
    // console.log(day.toLocaleDateString("en-GB", options));
    // console.log(day.getDay() === prevDate);

    let nameProp =
      day.getDay() !== prevDate
        ? `${day.toLocaleDateString("en-GB", options)} ${day.toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}`
        : `${day.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`;

    let obj = {
      name: nameProp,
      temp: Math.round(data[key].main.temp),
      feels_like: Math.round(data[key].main.feels_like),
    };
    prevDate = day.getDay();

    data1.push(obj);
  }

  console.log("arr", data1);

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
      <div>
        {/* <Chart /> */}
        {data1 && (
          <ComposedChart
            layout="vertical"
            width={950}
            height={800}
            data={data1}
            margin={{
              top: 60,
              right: 60,
              bottom: 60,
              left: 60,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={140} />
            <Tooltip />
            <Legend />
            <Area dataKey="feels_like" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="temp" barSize={20} fill="#413ea0" />
            {/* <Line dataKey="uv" stroke="#ff7300" /> */}
          </ComposedChart>
        )}
      </div>
    </>
  );
};

export default CitySearch;
