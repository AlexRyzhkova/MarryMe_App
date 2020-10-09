import React from "react";
import PropTypes from "prop-types";

function ItemsList({ children }) {
  return <div>{children}</div>;
}
ItemsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsList;
