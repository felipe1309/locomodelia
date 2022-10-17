import { configureStore } from "@reduxjs/toolkit";
import jugadorReducer from "../feactures/jugador/jugadorSlice";
import bingoReducer from "../feactures/bingo/bingoSlice";
const store = configureStore({
  reducer: {
    jugador: jugadorReducer,
    bingo: bingoReducer
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
