import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { bingo, bingoItem } from "../../types/bingo";
const bingoSlice = createSlice({
  name: "bingo",
  initialState: { bingoItems: [], me: false, state: false } as bingo,
  reducers: {
    createSala: (state, action: PayloadAction<bingoItem[]>) => {
      return {
        bingoItems: action.payload,
        me: true,
        state: true,
      };
    },
    uniceSala:(state,action)=>{
      
    }
  },
});
export const { createSala,uniceSala } = bingoSlice.actions;
export default bingoSlice.reducer;
