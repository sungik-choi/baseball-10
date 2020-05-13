const _ = {
  OAuthFetch: async (url, code) => {
    try {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(code),
      };
      const response = await fetch(url, option);
    } catch (err) {
      alert("Fetch Error !!");
    }
  },
};

export default _;
