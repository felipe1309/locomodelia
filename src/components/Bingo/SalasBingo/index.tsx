import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import SalasBingoItem from "./SalasBingoItem";
import { useCreateBingo } from "../../../hooks/useCreateSala";
import { useSalasBingo } from "../../../hooks/useSalasBingo";
import "./salasBingo.css";
const index = () => {
  const { salasBingo } = useSalasBingo();
  const route = useNavigate();
  const { createSala } = useCreateBingo();
  const handleCreaeteSala: MouseEventHandler<HTMLButtonElement> = () => {
    createSala()
    route('/jugar')
  };
  return (
    <div className="bingo__list">
      <>
        <ul className="list__salas">
          {salasBingo.map((sala, index) => (
            <SalasBingoItem id={sala.id} nombre={sala.name} key={index} />
          ))}
        </ul>
        <button onClick={handleCreaeteSala}>crear sala</button>
      </>
    </div>
  );
};

export default index;
