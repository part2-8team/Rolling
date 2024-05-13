import React from 'react';
import styled from 'styled-components';
import { bold14, bold16 } from '../../styles/fontSize';

const Button = styled.button`
  ${bold16}
  color: var(--gray900);
  border: 1px solid var(--gray300);
  border-radius: 6px;
  background-color: var(--white);
  padding: 7px 16px;
  cursor: pointer;

  @media (max-width: 360px) {
    ${bold14}
  }
`;

function CreateButton({ text, onClick }) {
  return (
    <Button onClick={onClick}>
    {text}
  </Button>
  );
}

export default CreateButton;