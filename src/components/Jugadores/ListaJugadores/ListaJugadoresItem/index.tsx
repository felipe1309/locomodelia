type props = {
  nombre: string;
};
const index = ({ nombre }: props) => {
  return <li>{nombre}</li>;
};

export default index;
