import Routes from "./pages";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import socket from "./socket";
import { add } from "./feactures/jugadores/jugadoresSlice";

const app = () => {
  const jugador = useAppSelector((state) => state.jugador);
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.on("isActive", (data) => {
      if (jugador.value !== "") {
        socket.emit("isActive:true", jugador);
      }
    });
    socket.on("activos:add", (data: string) => {
      console.log(data)
      dispatch(add(data));
    });
    socket.on("isActive:all", () => {
      socket.emit("isActive:me");
    });
    socket.on("isActive:me", (data) => {
      if (jugador.value !== "") {
        socket.emit("isActive:me-true", jugador);
      }
    });
    return () => {
      socket.off("isActive");
      socket.off("activos:add");
    };
  }, []);
  return <Routes />;
};

export default app;
