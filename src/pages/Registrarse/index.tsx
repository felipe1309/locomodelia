import "./registrarse.css";
import FormRegistrarse from "../../components/Forms/FormRegistrarse";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { Router } from "react-router-dom";
const index = () => {
  const jugador = useAppSelector((state) => state.jugador);
  useEffect(() => {
    if (window.localStorage.getItem("jugadorToken")) {
    }
  }, [jugador]);
  return (
    <main className="page__registrarse">
      <FormRegistrarse />
    </main>
  );
};

export default index;
