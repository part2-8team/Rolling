import React from "react";
import styled from "styled-components";
import { bold18 } from "../styles/fontSize";

function Button({ text, onClick }) {
  return (
    <ButtonStyledComponent onClick={onClick}>{text}</ButtonStyledComponent>
  );
}

export default Button;

const ButtonStyledComponent = styled.button`
  background-color: var(--purple600);
  color: var(--white);
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  height: 56px;

  ${bold18}
  width: 280px;
`;
