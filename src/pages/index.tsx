import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Registrarse from "./Registrarse";
import Error404 from "./404";
import JugarPage from './Jugar'
import Navbar from "../components/Navbar";
const index = () => {
  
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/jugar" element={<JugarPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
