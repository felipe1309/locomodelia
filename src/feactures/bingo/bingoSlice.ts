import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { bingo, bingoItem } from "../../types/bingo";
export type unirceSala = {
  idAdmin: number;
  bingoItems: bingoItem[];
};
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
    unicerSala: (state, action: PayloadAction<unirceSala>) => {
      const { payload } = action;
      const { bingoItems,idAdmin } = payload;
      return {
        bingoItems,
        me:false,
        state:true,
        idAdmin
      };
    },
  },
});
export const { createSala, unicerSala } = bingoSlice.actions;
export default bingoSlice.reducer;
