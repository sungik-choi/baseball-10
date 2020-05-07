import { useReducer } from "react";
import baseballData from "../store/baseballStore.js";
import { SELECT_TEAM, FETCH_TEAM_LIST } from "../action/action.jsx";

const baseballReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TEAM_LIST:
      return { ...state, teamList: action.data.teamlist };
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
