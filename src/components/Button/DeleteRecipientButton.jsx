import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteRecipient } from '../../api/recipientApi';
import { bold16 } from '../../styles/fontSize';

const Button = styled.button`
  width: 9.2rem;
  height: 3.9rem;
  margin-top: 6.5rem;
  margin-right: 2rem;
  padding: 0.6rem 1.6rem;
  border-radius: 0.8rem;
  ${bold16}
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'purple600')});
  color: var(--white);

  &:hover:enabled {
    background: var(--purple700);
  }

  &:active:enabled {
    background: var(--purple800);
  }

  &:focus:enabled {
    background: var(--purple800);
  }
`;

function DeleteRecipientButton() {
  const navigate = useNavigate();
  const { id: recipientID } = useParams();

  const handleButtonClick = async () => {
    await deleteRecipient(recipientID);
    navigate('/list', { replace: true });
  };

  return <Button onClick={handleButtonClick}>전체삭제</Button>;
}

export default DeleteRecipientButton;
