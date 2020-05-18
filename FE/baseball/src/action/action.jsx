/* Action type  */
export const SELECT_TEAM = "SELECT_TEAM";
export const FETCH_TEAM_LIST = "FETCH_TEAM_LIST";
export const PLAYER_LIST = "PLAYER_LIST";
export const PLAYGROUND = "PLAYGROUND";
export const LOADING = "LOADING";

export const selectTeam = (name, image) => {
  return { type: SELECT_TEAM, name: name, image: image };
};
