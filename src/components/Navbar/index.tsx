import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
const index = () => {
  const [auth, setauth] = useState(false);
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">Loco Modelia</Link>
      <button onClick={()=>{
        setToggle(!toggle)        
      }}>toggle</button>
      <ul className="navbar__ul-auth" id={toggle ? 'navbar__toggle-active' : ''}>
        <li className="navbar__ul-li">
          <Link to="/registrarse">registrarse</Link>
        </li>
        <li className="navbar__ul-li">
          <Link to="/iniciar">iniciar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default index;
