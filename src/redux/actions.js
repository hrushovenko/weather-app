import axios from "axios";

export const GET_CITY_INFO = "GET_CITY_INFO";

export const getCity = (cityName) => {
  const apiKey = "bad46dfee1ae1125ec4faf31e63449de";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  return async function (dispatch) {
    const res = await axios.get(url);
    const payload = res.data.list;
    // console.log(payload);
    return dispatch({
      type: GET_CITY_INFO,
      data: payload,
    });
  };
};
