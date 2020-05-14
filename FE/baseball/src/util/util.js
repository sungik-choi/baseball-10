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
};

export default _;
