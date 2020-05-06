import { useReducer } from "react";
import baseballData from "../mock/baseballData.js";

const baseballReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { gameList: [...state.gameList], counter: state.counter + 1 };
  }
};

const useBaseballReducer = () => {
  const [state, dispatch] = useReducer(baseballReducer, baseballData);
  return { state, dispatch };
};

export default useBaseballReducer;
