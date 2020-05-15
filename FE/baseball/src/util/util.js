import { playGroundFetch } from "components/useFetch";

const _ = {
  setCookie: (cookie_name, value, days) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    var cookie_value = escape(value) + (days == null ? "" : ";    expires=" + exdate.toUTCString());
    document.cookie = cookie_name + "=" + cookie_value;
  },

  getCookie: (key) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + key + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  },

  deleteCookie: (key) => {
    document.cookie = key + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
  },

  setLocalstorage: (key, value) => {
    localStorage.setItem(key, value);
  },

  getLocalstorage: (key) => {
    return localStorage.getItem(key);
  },

  transformBooleanType: (target) => {
    return Boolean(target === "true");
  },

  judgeDefenseTeam: (dispatch) => {
    const userEmail = _.getLocalstorage("matchId");
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
    const userEmail = _.getLocalstorage("matchId");
    const requsetURL = process.env.REACT_APP_API_URL + `api/${userEmail}/${inning}/${when}`;

    playGroundFetch(requsetURL, "PLAYGROUND", dispatch).then((defense) => {
      if (_.transformBooleanType(defense)) {
        return;
      } else {
        _.judgeDefenseTeam(dispatch);
      }
    });
  },

  judgeToMatchTarget: async (setIsMatch, dispatch) => {
    const matchId = _.getLocalstorage("matchId");
    const requsetURL = process.env.REACT_APP_API_URL + `/${matchId}/loading`;

    const response = await fetch(requsetURL);
    const initialData = await response.json();

    if (_.transformBooleanType(initialData.start)) {
      dispatch({ type: "LOADING", data: initialData });
      setIsMatch(true);
    } else {
      _.judgeToMatchTarget(setIsMatch, dispatch);
    }
  },
};

export default _;
