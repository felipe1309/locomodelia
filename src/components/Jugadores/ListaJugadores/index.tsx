import { useAppSelector } from "../../../hooks";
import ListaJugadoresItem from "./ListaJugadoresItem";
const index = () => {
  const jugadores = useAppSelector((state) => state.jugadores);
  return (
    <>
      {jugadores.length == 0 ? (
        <h2>no hay jugadores activos</h2>
      ) : (
        <ul>
          {jugadores.map((jugador, index) => (
            <ListaJugadoresItem nombre={jugador} key={index} />
          ))}
        </ul>
      )}
    </>
  );
};

export default index;
