import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import navTerminalReducer from "../components/navTerminal/navTerminalSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    visibility: navTerminalReducer,
  },
});
