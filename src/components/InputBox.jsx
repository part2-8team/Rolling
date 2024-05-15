import React, { useState } from 'react';
import styled from 'styled-components';
import { regular16, regular14 } from '../styles/fontSize';

function InputBox({
  name,
  value,
  onChange,
  placeholder,
  isError = false,
}) {
  const [error, setError] = useState(isError);

  const handleBlur = (e) => {
    if (!e.target.value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => handleBlur(e)}
        placeholder={placeholder}
        isError={error}
      />
      {error && <ErrorMessage> 값을 입력해 주세요.</ErrorMessage>}
    </div>
  );
}

export default InputBox;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => (isError ? 'var(--error)' : '#cccccc')}; // value가 빈 문자열일 때 error 색상 적용

  &:focus {
    outline: none;
  }

  &::placeholder {
    ${regular16}
  }
`;

const ErrorMessage = styled.div`
  margin: 7px 0 0 7px;
  ${regular14};
  color: var(--error);
`;
