import styled from 'styled-components';

import { regular16 } from './../../styles/fontSize';
import deleted from '../../assets/deleted.svg';

const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  border-radius: 0.6rem;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'white')});
  color: var(--gray900);
  border: 1px solid var(--gray300);
  ${regular16}
  position: absolute;
  right: 2.4rem;
  padding: 0.6rem;
  line-height: 0;
  &:hover:enabled {
    background: var(--gray100);
  }

  &:active:enabled {
    background: var(--gray100);
  }

  &:focus:enabled {
    border: 1px solid var(--gray500);
  }
`;

const DeleteImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

function DeleteButton({ id: messageId, onDelete }) {
  const handleButtonClick = async (e) => {
    e.stopPropagation();
    await onDelete(messageId);
  };

  return (
    <Button onClick={handleButtonClick}>
      <DeleteImg src={deleted} alt="메세지 삭제" />
    </Button>
  );
}

export default DeleteButton;
