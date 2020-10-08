import React from "react";
import PropTypes from "prop-types";

function ItemsList({ children }) {
  return <nav>{children}</nav>;
}
ItemsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemsList;
