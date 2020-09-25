import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const TitleInput = () => (
  <Input topic="Titel " type="text" value="Titel" placeholder="neues ToDo" />
);

export const InfosInput = () => (
  <Input
    topic="Beschreibung"
    type="text"
    value="Titel"
    placeholder="ToDo Beschreibung"
  />
);
