import React from 'react';
import styled from 'styled-components';
import { bold18 } from '../../styles/fontSize';

function Button({ disabled = false, type = 'text', text, onClick, width }) {
  return (
    <ButtonStyledComponent
      disabled={disabled}
      type={type}
      onClick={onClick}
      width={width}
    >
      {text}
    </ButtonStyledComponent>
  );
}

export default Button;

const ButtonStyledComponent = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? '#cccccc' : 'var(--purple600)'};
  color: var(--white);
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  height: 56px;

  ${bold18}
  width: ${(props) => (props.width ? props.width : '280px')};
`;
