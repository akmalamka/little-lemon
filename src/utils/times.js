import { fetchAPI } from "./api";

// Reducer
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.times;
    default:
      return state;
  }
};

// Initial fetch for today
export const initializeTimes = async () => {
  const today = new Date();
  return await fetchAPI(today);
};
