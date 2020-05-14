import { playGroundFetch } from "components/useFetch";

const _ = {
  getCookie: (key) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + key + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  },
  deleteCookie: (key) => {
    document.cookie = key + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
  },
  transformBooleanType: (target) => {
    return Boolean(target === "true");
  },
  judgeDefenseTeam: (dispatch) => {
    const userEmail = _.getCookie("userEmail");
    const requsetURL = process.env.REACT_APP_API_URL + `api/${userEmail}/lastest`;
    const testingURL = "http://15.164.34.6/api/mock/first";

    playGroundFetch(testingURL, "PLAYGROUND", dispatch).then((defense) => {
      if (_.transformBooleanType(defense)) {
        return;
      } else {
        setTimeout(() => {
          _.judgeDefenseTeam(dispatch);
        }, 2000);
      }
    });
  },
  judgeDefenseAfterPitching: (inning, when, dispatch) => {
    const userEmail = _.getCookie("userEmail");
    const requsetURL = process.env.REACT_APP_API_URL + `api/${userEmail}/${inning}/${when}`;

    playGroundFetch(requsetURL, "PLAYGROUND", dispatch).then((defense) => {
      if (_.transformBooleanType(defense)) {
        return;
      } else {
        _.judgeDefenseTeam(dispatch);
      }
    });
  },
};

export default _;
