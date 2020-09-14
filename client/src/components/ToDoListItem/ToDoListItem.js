import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import completedSrc from "../../assets/completed.svg";
import uncompletedSrc from "../../assets/uncompleted.svg";

const Button = styled.button`
  border-radius: 10px;
  background-color: #ffffff;
  color: #141313;
  padding: 10px;
  display: flex;
`;

const ToDoListItem = ({ title, category, completed }) => {
  return (
    <Button>
      <img src={completed ? completedSrc : uncompletedSrc} alt="Checkmark" />
      <span>{title}</span>
      <span>{category}</span>
    </Button>
  );
};

export default ToDoListItem;

ToDoListItem.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  completed: PropTypes.bool,
};
