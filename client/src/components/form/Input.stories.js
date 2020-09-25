import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const TitleInput = () => (
  <Input type="text" value="Titel" placeholder="neues ToDo" />
);
