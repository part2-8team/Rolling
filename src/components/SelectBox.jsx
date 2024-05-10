import React, { useState } from 'react';
import styled from 'styled-components';
import { regular16 } from '../styles/fontSize';
import arrowTop from '../assets/arrow-top.svg';
import arrowDown from '../assets/arrow-down.svg';

function SelectBox({ options = [], width, onClick }) {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setOpen] = useState(false);

  const handleSelected = (e) => {
    setSelected(e.target.getAttribute('value'));
  };

  return (
    <Select
      className={isOpen ? 'open' : ''}
      onClick={() => setOpen((isOpen) => !isOpen)}
      width={width}
    >
      <Label>{selected}</Label>
      {isOpen && (
        <SelectOptions onClick={onClick}>
          {options.map((option, i) => (
            <Option key={i} value={option} onClick={handleSelected}>
              {option}
            </Option>
          ))}
        </SelectOptions>
      )}
    </Select>
  );
}

export default SelectBox;

const Select = styled.div`
  position: relative;
  box-sizing: border-box;
  width: ${({ width }) => width};
  height: 50px;
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  background-image: url(${arrowDown});
  background-color: var(--white);
  background-repeat: no-repeat;
  background-position: center right 16px;
  cursor: pointer;

  &.open {
    border: 2px solid var(--gray500);
    background-image: url(${arrowTop});
  }
`;

const Label = styled.label`
  color: var(--gray900);
  ${regular16}
  line-height: 50px;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 58px;
  left: 0;
  z-index: 1;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  box-sizing: border-box;
  background-color: var(--white);
  cursor: pointer;
  overflow: hidden;
`;

const Option = styled.li`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-left: 16px;
  color: var(--gray900);
  ${regular16}
  line-height: 50px;

  &:hover {
    background-color: var(--gray100);
  }
`;
