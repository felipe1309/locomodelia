import { useAppDispatch, useAppSelector } from "./index";
import { logUp } from "../feactures/jugador/jugadorSlice";
import socket from "../socket";
import { useEffect } from "react";
import { token } from "../types/token";
const useAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.on("registrarse:activo", (data: token) => {
      dispatch(logUp(data));
    });
    return () => {
      socket.off("registrarse:activo");
    };
  });
  const regitrarse = (nombre: string, contraseña: string) => {
    socket.emit("registrarse", {
      nombre,
      contraseña,
    });
  };
  return { regitrarse };
};

export default useAuth;
