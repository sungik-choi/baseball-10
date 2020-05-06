import React from "react";
import { useTodoState, useTodoDispatch } from "../../context/context.jsx";

const GameList = () => {
  const state = useTodoState();
  const dispatch = useTodoDispatch();

  return <div>Game List</div>;
};

export default GameList;
