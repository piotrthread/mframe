import React, { useReducer} from "react";
import Context from "./context";

const initialState = {
  modalVisible: true,
  modalId: "podwieszane",
  menuActive: false,
  visualsModalVisible: false,
  realizationsModalVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, modalId: action.payload, modalVisible: true };
    case "HIDE_MODAL":
      return { ...state, modalVisible: false };
    case "TOGGLE_MENU":
      return { ...state, menuActive: !state.menuActive };
    case "SHOW_VISUALS_MODAL":
      return { ...state, visualsModalVisible: true };
    case "HIDE_VISUALS_MODAL":
      return { ...state, visualsModalVisible: false };
    case "SHOW_REALIZATIONS_MODAL":
      return { ...state, realizationsModalVisible: true };
    case "HIDE_REALIZATIONS_MODAL":
      return { ...state, realizationsModalVisible: false };
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
