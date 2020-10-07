import React from "react";
import MenuListItem from "../menuListItem/MenuListItem";
import PropTypes from "prop-types";
import timeIconSrc from "../../assets/time.svg";
import tasksIconSrc from "../../assets/tasks.svg";
import euroIconSrc from "../../assets/euro.svg";
import peopleIconSrc from "../../assets/people.svg";
import MenuList from "../MenuList/MenuList";

const Menu = ({ open }) => {
  return (
    <MenuList open={open}>
      <MenuListItem to="/" text="Home" icon={timeIconSrc} />
      <MenuListItem to="/todos" text="To-Do's" icon={tasksIconSrc} />
      <MenuListItem to={"/budget"} text="Budget" icon={euroIconSrc} />
      <MenuListItem to={"/guests"} text="Gästeliste" icon={peopleIconSrc} />
    </MenuList>
  );
};

export default Menu;

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
};
