import { useReducer } from "react";
import baseballStore from "../store/baseballStore.js";
import { SELECT_TEAM, FETCH_TEAM_LIST, PLAYER_LIST, PLAYGROUND, LOADING } from "../action/action.jsx";

const baseballReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TEAM_LIST:
      localStorage.setItem("matchId", action.data.matchId);
      return { ...state, matchId: action.data.matchId, teamList: action.data.data };
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
    case LOADING: {
      return {
        ...state,
        loading: action.data,
      };
    }
    case "DEMO_PLAYGROUND": {
      return {
        ...state,
        playGround: action.data,
      };
    }
    case "DEMO_SELECT_TEAM": {
      return {
        ...state,
        loading: {
          ...state.loading,
          firstTeam: {
            name: action.name,
            logoUrl: action.image,
          },
        },
      };
    }
    case "DEMO_MATCHING": {
      return {
        ...state,
        loading: {
          ...state.loading,
          secondTeam: {
            name: "알파고",
            logoUrl:
              "https://post-phinf.pstatic.net/MjAxOTA5MDVfMTU4/MDAxNTY3Njc2NDkyNTUz.yxnxow6Ff5DXIRAHGcOgNUvkV2J_Nh6WttPIi0aEk_kg.rORnLOgHe8wp3_D_UsEGapDaUtlv3JrZvFA6CalCJPEg.JPEG/%EB%AF%B8%EC%B3%A4%EC%8A%B5%EB%8B%88%EA%B9%8C_%ED%9C%B4%EB%A8%BC.jpg?type=w1200",
          },
        },
      };
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

// case 'TEST_CARD' : {
//   return {...state , loading : {...state.loading , secoundTeam : { name : "NC 다이노스" , logoUrl : "hello" } }}
// }
