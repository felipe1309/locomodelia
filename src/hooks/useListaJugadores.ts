import { useEffect, useState } from "react";
import { useAppSelector } from ".";
import socket from "../socket";
type player = {
  name: string;
  id: string;
};
export function useListaJugadores() {
  const [players, setPlayers] = useState<player[]>([]);
  useEffect(() => {
    // enviamos un evento que pregunte por los usurios activos
    socket.emit("isActive:all-players");
    return () => {
      socket.off("isActive:all-players");
    };
  }, []);

  useEffect(() => {
    // cuando escuchamos que otro usurio se conecto lo agregamos a la lista de usurios activos
    socket.on("activos:add", (newPlayer: player) => {
      const mapNamePlayers = players.map((player) => player.name);
      if (mapNamePlayers.lastIndexOf(newPlayer.name) === -1) {
        setPlayers([...players, newPlayer]);
      }
    });
    return () => {
      socket.off("activos:add");
    };
  }, [players]);
  return {
    players,
  };
}
