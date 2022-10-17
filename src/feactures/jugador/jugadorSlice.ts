import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { token } from "../../types/token";
const initialState = {
  value: ''
};
const jugadorSlice = createSlice({
  name: "jugador",
  initialState: window.localStorage.getItem('jugadorToken') ? {value:window.localStorage.getItem('jugadorToken')} :  initialState as token,
  reducers: {
    logIn: (state, action: PayloadAction<token>) => {},
    logUp: (state, action: PayloadAction<token>) => {
      window.localStorage.setItem("jugadorToken", action.payload.value);
      return action.payload;
    },
    close: () => {
      window.localStorage.removeItem("jugadorToken")
      return {
        value:''
      }
    },
  },
});
export const { close, logIn, logUp } = jugadorSlice.actions;
export default jugadorSlice.reducer;
