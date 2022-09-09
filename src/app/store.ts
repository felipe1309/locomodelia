import { configureStore } from "@reduxjs/toolkit";
import jugadorReducer from "../feactures/jugador/jugadorSlice";
import jugadoresReducer from "../feactures/jugadores/jugadoresSlice";
import bingoReducer from "../feactures/bingo/bingoSlice";
const store = configureStore({
  reducer: {
    jugador: jugadorReducer,
    jugadores: jugadoresReducer,
    bingo: bingoReducer
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
