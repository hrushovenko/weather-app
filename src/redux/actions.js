import axios from "axios";

export const GET_CITY_INFO = "GET_CITY_INFO";
export const ERROR = "ERROR";

export const getCity = (cityName) => {
  const apiKey = "bad46dfee1ae1125ec4faf31e63449de";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

  return async function (dispatch) {
    await axios
      .get(url)
      .then((res) => {
        const payload = res.data;
        return dispatch({
          type: GET_CITY_INFO,
          data: payload,
        });
      })
      .catch((e) => {
        return dispatch({
          type: ERROR,
          data: e,
        });
      });
  };
};
