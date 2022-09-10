import { useAppDispatch, useAppSelector } from ".";
import { bingoItem } from "../types/bingo";
import { createSala, uniceSala } from "../feactures/bingo/bingoSlice";
import socket from "../socket";
import { useEffect, useState } from "react";
interface dataCreate {
  nombre: string;
  id: string;
}
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
  const bingo = useAppSelector((state) => state.bingo);
  const create = () => {
    const bingoItems = generarBingos();
    dispatch(createSala(bingoItems));
    socket.emit("bingo:create", {
      admin: jugador.value,
      id: socket.id,
    });
  };
  return { create };
}
export function useGetSalas() {
  const [salas, setSalas] = useState<dataCreate[]>([]);
  const salaBingo = useAppSelector((state) => state.bingo);
  const jugador = useAppSelector((state) => state.jugador);
  useEffect(() => {
    socket.on("isActive", () => {
      socket.emit("bingo:get-salas");
    });
    socket.on("bingo:get-sala", () => {
      if (salaBingo.me && salaBingo.state) {
        socket.emit("bingo:set-sala", jugador.value);
      }
    });
    socket.on("bingo:set-sala", (data: dataCreate) => {
      setSalas([...salas, data]);
    });
    socket.on("bingo:create", (data: dataCreate) => {
      setSalas([data, ...salas]);
    });
    return () => {
      socket.off("bingo:get-salas");
      socket.off("bingo:set-sala");
      socket.off("bingo:set-sala");
      socket.off("bingo:create");
    };
  }, []);
  useEffect(() => {
    if (salaBingo.state && salaBingo.me) {
      setSalas([{
        nombre:"yo",
        id:socket.id
      }, ...salas]);
    }
  }, [salaBingo]);
  return {
    salasBingo: salas,
  };
}
