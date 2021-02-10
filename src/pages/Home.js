import "../styles/home.css";

import Chart from "../components/Chart";
import CitySearch from "../components/CitySearch";

import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((state) => state.cityReducer.cityInfo.list);

  const isErrorLoading = useSelector((state) => state.cityReducer.errorLoad);

  const dataToChart = [];
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  for (const key in data) {
    let day = new Date(data[key].dt_txt);

    let nameProp = `${day.toLocaleDateString(
      "en-GB",
      options
    )} ${day.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;

    let obj = {
      name: nameProp,
      temp: Math.round(data[key].main.temp),
      feels_like: Math.round(data[key].main.feels_like),
    };

    dataToChart.push(obj);
  }

  return (
    <>
      <h1>Weather APP</h1>
      <CitySearch />
      {isErrorLoading ? (
        <div className="alert">
          <h2>City not found...</h2>
        </div>
      ) : (
        ""
      )}

      {data ? (
        <Chart dataToChart={dataToChart} />
      ) : (
        <h3>Please enter your city</h3>
      )}
    </>
  );
}

export default Home;
