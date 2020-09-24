import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const List = ({ items = [] }) => {
  return (
    <ListContainer>
      {items?.map((item) => (
        <ToDoListItem
          key={item.id}
          title={item.title}
          category={item.category}
          infos={item.infos}
          completed={item.completed}
        />
      ))}
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-self: center;

  button {
    margin: 5px;
    max-width: 50rem;
  }
`;

List.propTypes = {
  items: PropTypes.array,
};
