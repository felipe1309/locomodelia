import { useAppSelector } from "../../hooks";
import "./jugarPage.css";
const index = () => {
  const bingo = useAppSelector((state) => state.bingo);
  return (
    <main>
      <h1>Jugar</h1>
      <ul>
        {bingo.bingoItems.map((bingo,index) => (
          <li key={index}>{bingo.number}</li>
        ))}
      </ul>
    </main>
  );
};

export default index;
