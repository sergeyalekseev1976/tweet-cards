import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-left: 15px;
  margin-bottom: 15px;
  gap: 10px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: #5cd3a8;
  }
`;
