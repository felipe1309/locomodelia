import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks";
import socket from "../../../socket";
import "./salasBingo.css";
const index = () => {
  const salaBingo = useAppSelector((state) => state.bingo);
  const jugador = useAppSelector((state) => state.jugador);
  const [salasBingo, setSalasBingo] = useState<string[]>([]);
  useEffect(() => {
    socket.on("isActive", () => {
      socket.emit("bingo:get-salas");
    });
    socket.on("bingo:get-sala", () => {
      if (salaBingo.me && salaBingo.state) {
        socket.emit("bingo:set-sala", jugador.value);
      }
    });
    socket.on("bingo:set-sala", (data: string) => {
      setSalasBingo([...salasBingo, data]);
    });
    return () => {
      socket.off("bingo:get-salas");
      socket.off("bingo:set-sala");
      socket.off("bingo:set-sala");
    };
  }, []);
  return (
    <div className="bingo__list">
      {salasBingo.length === 0 ? (
        <>
          <h2>no hay salas</h2>
          <button>crear sala</button>
        </>
      ) : (
        <>
          <ul>
            {salasBingo.map((sala) => (
              <li>{sala}</li>
            ))}
          </ul>
          <button>crear sala</button>
        </>
      )}
    </div>
  );
};

export default index;
