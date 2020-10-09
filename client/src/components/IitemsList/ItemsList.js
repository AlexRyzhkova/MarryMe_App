import React from "react";
import PropTypes from "prop-types";

function ItemsList({ children, onClick, onRefetch }) {
  return (
    <div onRefetch={onRefetch} onClick={onClick}>
      {children}
    </div>
  );
}
ItemsList.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onRefetch: PropTypes.func,
};

export default ItemsList;
