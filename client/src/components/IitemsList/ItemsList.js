import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ItemsList({ children }) {
  return <ListContainer>{children}</ListContainer>;
}

export default ItemsList;

//styling
const ListContainer = styled.ul`
  padding: 0;
  height: 100vh;
`;

ItemsList.propTypes = {
  children: PropTypes.node.isRequired,
};
