import { createContext, useContext } from "react";

const baseballStateContext = createContext();
const baseballDispatchContext = createContext();

const useTodoState = () => {
  return useContext(baseballStateContext);
};
const useTodoDispatch = () => {
  return useContext(baseballDispatchContext);
};

export { baseballStateContext, baseballDispatchContext, useTodoState, useTodoDispatch };
