import { useAppDispatch, useAppSelector } from ".";
import { bingoItem } from "../types/bingo";
import { createSala, uniceSala } from "../feactures/bingo/bingoSlice";
import socket from "../socket";
import { useEffect } from "react";
function generarBingos() {
  const array: bingoItem[] = [];
  for (let e = 0; e < 5; e++) {
    for (let i = 0; i < 5; i++) {
      let randon = Math.round(Math.random() * 100);
      array.push({
        columna: e,
        fila: i,
        number: randon,
        state: false,
      });
    }
  }
  return array;
}
export function useInitBingo() {
  const dispatch = useAppDispatch();
  const jugador = useAppSelector((state) => state.jugador);
  useEffect(() => {
    socket.on("bingo:create", (data: string) => {
      dispatch(uniceSala(data))
    });
  }, []);

  const create = () => {
    const bingoItems = generarBingos();
    dispatch(createSala(bingoItems));
    socket.emit("bingo:create", {
      admin: jugador.value,
    });
  };
  return { create };
}
