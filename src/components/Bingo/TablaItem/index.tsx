import type { bingoItem } from "../../../types/bingo";
const index = ({ columna, fila, number, state }: bingoItem) => {
  return <li>{number}</li>;
};

export default index;
