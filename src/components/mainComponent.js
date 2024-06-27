import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { userState, getUsers, addUser, editUser, deleteUser } = props;

  const [editMode, setEditMode] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleSubmit = ({ id, name, email }) => {
    if (editMode) {
      editUser({ id, name, email });
      setEditMode(false);
      setUserToEdit(null);
    } else {
      addUser({ name, email });
    }
  };

  const handleDelete = (id) => {
    deleteUser({ id });
  };

  const handleEdit = ({ id, name, email }) => {
    setEditMode(true);
    setUserToEdit({ id, name, email });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper">
      <InputHandler
        onSubmit={handleSubmit}
        editMode={editMode}
        userToEdit={userToEdit}
      />
      <SimpleTable
        dataSource={userState.users}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default MainComponent;
