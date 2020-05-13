import { useReducer } from "react";
import baseballStore from "../store/baseballStore.js";
import { SELECT_TEAM, FETCH_TEAM_LIST, PLAYER_LIST } from "../action/action.jsx";

const baseballReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TEAM_LIST:
      return { ...state, teamList: action.data.teamlist };
    case SELECT_TEAM:
      return { ...state, selectedTeam: { ...state.selectedTeam, name: action.name, image: action.image } };
    case PLAYER_LIST: {
      return { ...state, playerList: action.playerList.data };
    }
    default:
      return state;
  }
};

const useBaseballReducer = () => {
  const [state, dispatch] = useReducer(baseballReducer, baseballStore);
  return { state, dispatch };
};

export default useBaseballReducer;
