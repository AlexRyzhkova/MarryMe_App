import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import completedSrc from "../../assets/completed.svg";
import uncompletedSrc from "../../assets/uncompleted.svg";

const ToDoListItem = ({
  title,
  category,
  completed,
  onCompletedClick,
  onClick,
}) => {
  return (
    <Button onClick={onClick}>
      <CompletedButton onClick={onCompletedClick}>
        <img src={completed ? completedSrc : uncompletedSrc} alt="Checkmark" />
      </CompletedButton>
      <TitelSpan>{title}</TitelSpan>
      <CategorySpan>{category}</CategorySpan>
    </Button>
  );
};
export default ToDoListItem;

//Styling
const Button = styled.button`
  border-radius: 1.8em;
  background-color: #ffffff;
  color: #141313;
  padding: 0.9em 0.3em 0.3em 0.3em;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 10% 1fr auto;
  outline: none;
  box-shadow: 2px 2px 6px 0px lightgrey;
  column-gap: 10px;
  cursor: pointer;
  border: none;
`;

const CompletedButton = styled.button`
  grid-row: 1/3;
  grid-column: 1/2;
  outline: none;
  border: none;
  background-color: #ffffff;
  align-self: center;
`;

const TitelSpan = styled.span`
  align-self: end;
  justify-self: start;
`;

const CategorySpan = styled.span`
  font-size: 0.9rem;
  padding-right: 10px;
  grid-row: 2/3;
  grid-column: 3/4;
`;

// Proptypes
ToDoListItem.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  completed: PropTypes.bool,
  onCompletedClick: PropTypes.func,
  onClick: PropTypes.func,
};
