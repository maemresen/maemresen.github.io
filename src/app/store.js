import { configureStore } from "@reduxjs/toolkit";
import navTerminalReducer from "../components/navTerminal/navTerminalSlice";

export default configureStore({
  reducer: {
    visibility: navTerminalReducer,
  },
});
