import { MouseEventHandler } from "react";
import { useInitBingo, useGetSalas } from "../../../hooks/useBingo";
import "./salasBingo.css";
const index = () => {
  const { salasBingo } = useGetSalas();
  const { create } = useInitBingo();
  const handleCreaeteSala: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("felipe");
    create();
  };
  return (
    <div className="bingo__list">
      {salasBingo.length === 0 ? (
        <>
          <h2>no hay salas</h2>
          <button onClick={handleCreaeteSala}>crear sala</button>
        </>
      ) : (
        <>
          <ul>
            {salasBingo.map((sala, index) => (
              <li key={index} id={sala.id}>
                {sala.nombre}
              </li>
            ))}
          </ul>
          <button onClick={handleCreaeteSala}>crear sala</button>
        </>
      )}
    </div>
  );
};

export default index;
