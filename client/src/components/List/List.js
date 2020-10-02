import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const List = ({ items = [], onClick, error, loading }) => {
  return (
    <ListContainer>
      {error && <p>Error</p>}
      {loading && <p>Loading ...</p>}

      {items?.map((item) => (
        <ToDoListItem
          key={item.id}
          title={item.title}
          category={item.category}
          description={item.description}
          completed={item.completed}
          toDoId={item.Id}
          onClick={() => onClick(item.id)}
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
  onClick: PropTypes.func,
  error: PropTypes.any,
  loading: PropTypes.any,
};
