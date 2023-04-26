import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  margin-bottom: 15px;
  padding: 20px 0px;
  color: #fff;
  background-color: #5736A3;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out;
  &.active {
    color: #5cd3a8;
  }
`;
