import React from "react";
import { baseballStateContext, baseballDispatchContext } from "../context/context.jsx";
import useBaseballReducer from "../reducer/reducer.jsx";

const BaseballProvider = ({ children }) => {
  const { state, dispatch } = useBaseballReducer();

  return (
    <baseballStateContext.Provider value={state}>
      <baseballDispatchContext.Provider value={dispatch}>{children}</baseballDispatchContext.Provider>
    </baseballStateContext.Provider>
  );
};

export default BaseballProvider;
