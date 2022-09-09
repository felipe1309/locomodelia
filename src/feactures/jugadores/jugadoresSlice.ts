import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const jugadoresSlice = createSlice({
  name: "jugadores",
  initialState: [] as string[],
  reducers: {
    add: (state, action) => {
      console.log(state.map((e) => e).lastIndexOf(action.payload)<0)
      if (state.map((e) => e).lastIndexOf(action.payload)<0) {
        return [...state, action.payload];
      } else {
        return state
      }
    },
  },
});
export const { add } = jugadoresSlice.actions;
export default jugadoresSlice.reducer;
