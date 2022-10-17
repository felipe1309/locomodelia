import Routes from "./pages";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import socket from "./socket";
import { unicerSala, unirceSala } from "./feactures/bingo/bingoSlice";

const app = () => {
  const jugador = useAppSelector((state) => state.jugador);
  const bingo = useAppSelector((state) => state.bingo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // cuando escuchas el evento de coneccion con el socket
    socket.on("isActive", (data) => {
      if (
        jugador.value !== "" &&
        jugador.value !== "undefined" &&
        jugador.value !== null
      ) {
        // si tienes un usuario en el estado mandas un evento al socket diciendole que estas activo (le pasas tu token para que pueda acceder a tu)
        socket.emit("isActive:true", jugador);
      }
    });
    // escuchamos un evento que nos pregunta si estamos activos
    socket.on("isActive:all-players", (id: String) => {
      console.log(id);
      if (jugador.value !== "") {
        // si si estamos activos, enviamos un evento con unestra informacion para que sepan que estamos activos
        socket.emit("isActive:me-true", {
          token: jugador.value,
          id,
        });
      }
    });
    return () => {
      socket.off("isActive");
      socket.off("isActive:all-players");
    };
  }, [jugador]);
  useEffect(() => {
    if (
      jugador.value !== "" &&
      jugador.value !== "undefined" &&
      jugador.value !== null &&
      bingo.me &&
      bingo.state
    ) {
      socket.emit("salaState:true", {
        token: jugador.value,
        id: socket.id,
      });
    }
    socket.on("salas:get-all", (id: string) => {
      if (
        jugador.value !== "" &&
        jugador.value !== "undefined" &&
        jugador.value !== null &&
        bingo.me &&
        bingo.state
      ) {
        socket.emit("salas:set-sala", {
          id,
          token: jugador.value,
        });
      }
    });
    socket.on("sala:unirse", (id: string) => {
      console.log(id)
    });
    return () => {
      socket.off("salas:get-all");
      socket.off('sala:unirse')
    };
  }, [bingo]);

  return <Routes />;
};

export default app;
