import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Input from "../form/Input";
import Button from "../form/Button";
import { postGuest } from "../../api/postGuest";

const AddNewItem = ({ guest, onSetShowModal, onRefetch }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const guest = { firstname, lastname };
    await postGuest(guest);
    onSetShowModal(false);
    await onRefetch();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        value={firstname}
        topic="Vorname"
        placeholder="Vorname"
        onChange={(event) => {
          setFirstname(event.target.value);
        }}
      />
      <Input
        value={lastname}
        topic="Nachname"
        placeholder="Nachname"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      {/* <DeleteButton type="button" onClick={handleDeleteToDo} /> */}
      <Button />
    </StyledForm>
  );
};

export default AddNewItem;

//styling

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #cebebe;
  z-index: 2;
  width: 100%;

  button:first-of-type {
    align-self: flex-end;
    margin-top: 3em;
    padding-right: 2em;
  }
  button:last-of-type {
    margin: 3em 0px;
    align-self: center;
  }

  div:nth-child(3) {
    align-self: flex-end;
  }
`;

AddNewItem.propTypes = {
  guest: PropTypes.any,
  onSetShowModal: PropTypes.func,
  onRefetch: PropTypes.func,
};
