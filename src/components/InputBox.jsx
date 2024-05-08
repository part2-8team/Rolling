import React, { useState } from 'react';
import styled from 'styled-components';
import { regular16, regular14 } from '../styles/fontSize';

function InputBox({ placeholder }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (!inputValue) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder={placeholder}
        isError={error}
      />
      {error && !inputValue && (
        <ErrorMessage> 값을 입력해 주세요.</ErrorMessage>
      )}
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
  border: 1px solid
    ${({ isError, value }) => (isError && !value ? 'var(--error)' : '#cccccc')}; // value가 빈 문자열일 때 error 색상 적용

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
