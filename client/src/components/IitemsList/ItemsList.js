import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ItemsList({ children }) {
  return <ListContainer>{children}</ListContainer>;
}
ItemsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsList;

const ListContainer = styled.ul`
  padding: 0;
`;
