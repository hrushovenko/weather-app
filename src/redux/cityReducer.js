import { GET_CITY_INFO } from "./actions";
import { ERROR } from "./actions";

const initialState = {
  cityInfo: {},
  errorLoad: false,
};

const cityReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case GET_CITY_INFO:
      return { ...state, cityInfo: data, errorLoad: false };
    case ERROR:
      return { ...state, cityInfo: {}, errorLoad: true };
    default:
      return state;
  }
};

export default cityReducer;
