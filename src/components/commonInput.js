import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";

const InputHandler = ({ onSubmit, editMode = false, userToEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editMode && userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [editMode, userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onSubmit({ id: userToEdit?.id, name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="header-box">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></Input>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></Input>
      <Button type="primary" onClick={handleSubmit}>
        {!editMode ? "Add User" : "Edit User"}
      </Button>
    </div>
  );
};

export default InputHandler;
