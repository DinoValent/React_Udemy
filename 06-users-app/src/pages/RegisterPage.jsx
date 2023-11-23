/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";
//Pasamos el user como arreglo ya que en el metodo de register
//no viene ningun usuario, pero para editarlo si vienen pero no puede estar
//indefinido para que no salte el error en el metodo find

export const RegisterPage = ({
  users = [],
  handlerAddUser,
  initialUserForm,
}) => {
  const [userSelected, setUserSelected] = useState(initialUserForm);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = users.find((u) => u.id == id) || initialUserForm;
      setUserSelected(user);
    }
  }, [id]);

  return (
    <div className="container my-4">
      <h4>{userSelected.id > 0 ? "Editar" : "Registrar"} Usuario</h4>
      <div className="row">
        <div className="col">
          <UserForm
            userSelected={userSelected}
            handlerAddUser={handlerAddUser}
            initialUserForm={initialUserForm}
          />
        </div>
      </div>
    </div>
  );
};
