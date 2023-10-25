import { useState } from "react";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};
export const UserForm = ({ handlerAddUser, initialUserForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, password, email } = userForm;

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
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};
