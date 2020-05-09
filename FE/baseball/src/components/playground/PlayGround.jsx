import React from "react";
import PlayerList from "./playerList/PlayerList";
import { Link } from "react-router-dom";

const PlayGround = () => {
  return (
    <div>
      <div>PlayGround</div>
      <Link to="/playerlist">선수 명단</Link>
    </div>
  );
};

export default PlayGround;
