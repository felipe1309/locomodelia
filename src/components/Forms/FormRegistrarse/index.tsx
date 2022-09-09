import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import type { user } from "../../../types/user";
import "./formRegistrarse.css";
import useAuth from "../../../hooks/useAuth";
type registrarse = Omit<user, "victorias"> & {
  repetirContraseña: string;
};
const index = () => {
  const auth = useAuth();
  const [registrarse, setRegistrarse] = useState<registrarse>({
    contraseña: "",
    nombre: "",
    repetirContraseña: "",
  });

  const handdleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegistrarse({
      ...registrarse,
      [e.target.name]: e.target.value,
    });
  };
  const handdleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.regitrarse(registrarse.nombre, registrarse.contraseña);
    setRegistrarse({
      contraseña: "",
      nombre: "",
      repetirContraseña: "",
    });
  };
  return (
    <form className="form__registrarse" onSubmit={handdleSubmit}>
      <h1>xochiregistrate para poder jugar!!</h1>
      <div className="form__registrarse-item">
        <input
          type="text"
          name="nombre"
          value={registrarse.nombre}
          onChange={handdleChange}
          placeholder="nombre"
        />
      </div>
      <div className="form__registrarse-item">
        <input
          type="password"
          name="contraseña"
          value={registrarse.contraseña}
          onChange={handdleChange}
          placeholder="contrase"
        />
      </div>
      <div className="form__registrarse-item">
        <input
          type="password"
          name="repetirContraseña"
          value={registrarse.repetirContraseña}
          onChange={handdleChange}
          placeholder="repetir contrase"
        />
      </div>
      <div className="form__registrarse-item">
        <input type="submit" value="registrarse" />
      </div>
    </form>
  );
};

export default index;
