import { useEffect, useState } from "react";
import socket from "../socket";
type salas = {
  name: string;
  id: string;
};
export function useSalasBingo() {
  const [salasBingo, setSalasBingo] = useState<salas[]>([]);
  useEffect(() => {
    // evento que pregunta a los otros sockets si tienen salas activas
    socket.emit("salas:get-all");
    return () => {
      socket.off("salas:get-all");
    };
  }, []);
  useEffect(() => {
    // cuando un socket tiene una sala activa escuchamos el evento que nos manda con la informacion y agregamos esta sala a la lista de salas activas
    socket.on("add-sala", (sala: salas) => {
      const mapSalasName = salasBingo.map((sala) => sala.name);
      if (mapSalasName.lastIndexOf(sala.name) === -1) {
        setSalasBingo([...salasBingo, sala]);
      }
    });
    return () => {
      socket.off("add-sala");
    };
  }, [salasBingo]);
  return {
    salasBingo,
  };
}
