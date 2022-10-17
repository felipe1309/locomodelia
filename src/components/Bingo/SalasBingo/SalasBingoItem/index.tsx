import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useUnirceSala } from "../../../../hooks/useUnirceSala";
import "./salasBingoItem.css";
type props = {
  nombre: string;
  id: string;
};

const index = ({ id, nombre }: props) => {
  const route = useNavigate();
  const { unirceSala } = useUnirceSala();
  const unirseSala: MouseEventHandler<HTMLLIElement> = (data) => {
    const id = data.target.id as string;
    unirceSala(id)
  };
  return (
    <li onClick={unirseSala} className="lista__salas-item" id={id}>
      {nombre} <div className="asala__activa"></div>
    </li>
  );
};

export default index;
