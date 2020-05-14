import { useReducer } from "react";
import baseballStore from "../store/baseballStore.js";
import { SELECT_TEAM, FETCH_TEAM_LIST, PLAYER_LIST, PLAYGROUND } from "../action/action.jsx";

const baseballReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TEAM_LIST:
      return { ...state, teamList: action.data.teamlist };
    case SELECT_TEAM:
      return { ...state, selectedTeam: { ...state.selectedTeam, name: action.name, image: action.image } };
    case "TEST":
      return { ...state, playGround: { ...state.playGround, plates: { ...state.playGround.plates, baseSecond: 1, baseThird: 1 } } };
    case PLAYER_LIST: {
      return { ...state, playerList: action.data };
    }
    case PLAYGROUND: {
      return { ...state, playGround: action.data };
    }
    case "TESTING": {
      return { ...state, playGround: { ...state.playGround, defense: "false" } };
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
