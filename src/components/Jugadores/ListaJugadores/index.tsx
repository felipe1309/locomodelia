import { useListaJugadores } from "../../../hooks/useListaJugadores";
import ListaJugadoresItem from "./ListaJugadoresItem";
const index = () => {
  const { players } = useListaJugadores();
  return (
    <>
      {players.length == 0 ? (
        <h2>no hay jugadores activos</h2>
      ) : (
        <ul>
          {players.map((jugador, index) => (
            <ListaJugadoresItem nombre={jugador.name} key={index} />
          ))}
        </ul>
      )}
    </>
  );
};

export default index;
