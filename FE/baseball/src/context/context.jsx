import { createContext, useContext } from "react";

const baseballStateContext = createContext();
const baseballDispatchContext = createContext();

const useBaseballState = () => {
  return useContext(baseballStateContext);
};

const useBaseballDispatch = () => {
  return useContext(baseballDispatchContext);
};

export { baseballStateContext, baseballDispatchContext, useBaseballState, useBaseballDispatch };
