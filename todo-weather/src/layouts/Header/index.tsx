import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import styled from "styled-components";

const MuiAppBar = styled(AppBar)`
  li {
    float: left;
    display: block;
    margin-right: 20px;
    color: #fff;
  }
  & a {
    color: inherit;
  }
`;

const Header = () => {
  return (
    <MuiAppBar>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
      </ul>
    </MuiAppBar>
  );
};

export default Header;
