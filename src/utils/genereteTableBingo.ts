import type { bingoItem } from "../types/bingo";
export default (): bingoItem[] => {
  let listBingoItems: bingoItem[] = [];
  let listNumbersRandoms: number[] = [];
  while (listNumbersRandoms.length < 25) {
    const random = Math.round(Math.random() * 100);
    if (listNumbersRandoms.lastIndexOf(random) === -1) {
      listNumbersRandoms = listNumbersRandoms.concat(random);
    }
  }
  let iter = 0;
  for (let i = 1; i < 6; i++) {
    for (let f = 1; f < 6; f++) {
      listBingoItems = listBingoItems.concat({
        fila: i,
        columna: f,
        number: listNumbersRandoms[iter],
        state: false,
      });
      iter = iter + 1;
    }
  }
  return listBingoItems;
};
