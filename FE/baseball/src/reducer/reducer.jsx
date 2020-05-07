import { useReducer } from "react";
import baseballData from "../mock/baseballData.js";
import { SELECT_TEAM } from "../action/action.jsx";

const baseballReducer = (state, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      return { ...state };
    default:
      return state;
  }
};

const useBaseballReducer = () => {
  const [state, dispatch] = useReducer(baseballReducer, baseballData);
  return { state, dispatch };
};

export default useBaseballReducer;
