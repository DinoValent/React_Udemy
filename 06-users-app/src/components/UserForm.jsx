/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const UserForm = ({ userSelected, handlerAddUser, initialUserForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...userSelected });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      alert("Debe completar los campos del formulario!!!");
      return;
    }

    //GUARDAR EL USER FORM EN EL LISTADO DE USUARIOS
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
        value={username}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Password"
        type="password"
        name="password"
        onChange={onInputChange}
        value={password}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        onChange={onInputChange}
        value={email}
      />
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Editar" : "Crear"}
      </button>
    </form>
  );
};
