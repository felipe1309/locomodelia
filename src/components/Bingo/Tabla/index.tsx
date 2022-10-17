import { MouseEventHandler, useEffect, useState } from "react";
import TablaItem from "../TablaItem";
import { useAppSelector } from "../../../hooks";
import { useCreateBingo } from "../../../hooks/useCreateSala";
const index = () => {
  const bingo = useAppSelector((state) => state.bingo);
  const { createSala } = useCreateBingo();
  const handdleCreateBingo: MouseEventHandler<HTMLButtonElement> = () => {
    createSala()
  };
  return (
    <section>
      <h1>xochiBingo</h1>
      <ul className="bingo">
        {bingo.state ? (
          bingo.bingoItems.map(({ columna, fila, number, state }, index) => (
            <TablaItem
              columna={columna}
              fila={fila}
              number={number}
              state={state}
              key={index}
            />
          ))
        ) : (
          <>
            <h2>no estas jugando</h2>
            <button onClick={handdleCreateBingo}>Crear sala</button>
          </>
        )}
      </ul>
    </section>
  );
};

export default index;
