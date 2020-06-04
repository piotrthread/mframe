import React, { useReducer } from "react";
import Context from "./context";

const initialState = {
  modalVisible: false,
  modalId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, modalId: action.payload, modalVisible: true };
    case "HIDE_MODAL":
      return { ...state, modalVisible: false };
    default:
      return state;
  }
};

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state: state,
        dispatch: (action, data) => {
          dispatch({ type: action, payload: data });
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
