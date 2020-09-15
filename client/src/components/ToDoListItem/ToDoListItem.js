import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import completedSrc from "../../assets/completed.svg";
import uncompletedSrc from "../../assets/uncompleted.svg";

const Button = styled.button`
  border-radius: 20px;
  background-color: #ffffff;
  color: #141313;
  padding: 10px;
  display: flex;
  align-items: center;
  outline: none;
  box-shadow: 2px 2px 6px 0px lightgrey;
  border-color: #707070;
  span {
    padding: 5px;
  }
`;

const CategorySpan = styled.span`
  font-size: 0.7rem;
  color: #383636;
`;

const ToDoListItem = ({ title, category, completed }) => {
  return (
    <Button>
      <img src={completed ? completedSrc : uncompletedSrc} alt="Checkmark" />
      <span>{title}</span>
      <CategorySpan>{category}</CategorySpan>
    </Button>
  );
};

export default ToDoListItem;

ToDoListItem.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  completed: PropTypes.bool,
};
