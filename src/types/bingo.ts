export interface bingo {
  state: boolean;
  me: boolean;
  bingoItems: bingoItem[];
}
export type bingoItem = {
  state: boolean;
  number: number;
  fila: number;
  columna: number;
};
