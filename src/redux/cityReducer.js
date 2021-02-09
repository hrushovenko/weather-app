import { GET_CITY_INFO } from "./actions";

const initialState = {
  text: "123",
  cityInfo: {},
};

const cityReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case GET_CITY_INFO:
      return { ...state, cityInfo: data };
    default:
      return state;
  }
};

export default cityReducer;
