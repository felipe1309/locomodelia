export type bingo = {
  state: boolean;
  me: boolean;
  bingoItems: bingoItem[];
  idAdmin?: number
}
export type bingoItem = {
  state: boolean;
  number: number;
  fila: number;
  columna: number;
};
