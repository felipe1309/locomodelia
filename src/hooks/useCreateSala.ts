import { useAppDispatch } from ".";
import { createSala as create } from "../feactures/bingo/bingoSlice";
import genereteTableBingo from "../utils/genereteTableBingo";
export function useCreateBingo() {
  const dispatch = useAppDispatch();
  const createSala = () => {
    const tablaBingo = genereteTableBingo();
    dispatch(create(tablaBingo));
  };
  return { createSala };
}
