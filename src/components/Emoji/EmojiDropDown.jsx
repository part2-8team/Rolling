import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createReaction, getReactions } from '../../api/recipientApi';
import { regular16 } from '../../styles/fontSize';
import EmojiButtonList from './EmojiButtonList';
import EmojiContainer from './EmojiContainer';
import add24 from '../../assets/add24.svg';

const EmojiAddButton = styled.div`
  position: relative;
  padding: 0.6rem 1.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'white')});
  color: var(--${({ disabled }) => (disabled ? 'white' : 'gray900')});
  border: 1px solid var(--gray300);
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  ${regular16}

  &:hover {
    background: var(--gray100);
  }

  &:active {
    background: var(--gray100);
  }

  &:focus {
    border: 1px solid var(--gray500);
  }

  @media (max-width: 470px) {
    span {
      display: none;
    }
    padding: 0.6rem 0.8rem;
  }

  @media (max-width: 371px) {
    padding: 0.5rem;
  }
`;

const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;
  z-index: 9999;

  @media (max-width: 447px) {
    right: -60px;
  }
`;

function EmojiDropDown({isNav}) {
  const [emojiList, setEmojiList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { id: recipient_id } = useParams();

  const handleEmojiPicker = () => {
    setIsOpen(!isOpen);
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleEmojiData = async () => {
    try {
      const emojis = await getReactions(recipient_id);
      setEmojiList(emojis);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    handleEmojiData();
  }, []);

  return (
    <>
      <EmojiButtonList
        id={recipient_id}
        emojiList={emojiList}
        setEmojiList={setEmojiList}
        isNav={isNav}
      />
      <EmojiAddButton onClick={handleEmojiPicker}>
        <img src={add24} alt="" />
        <span>추가</span>
        {isOpen && (
          <EmojiPickerWrapper onClick={stopPropagation}>
            <EmojiContainer
              id={recipient_id}
              addEmoji={setEmojiList}
              createReaction={createReaction}
            />
          </EmojiPickerWrapper>
        )}
      </EmojiAddButton>
    </>
  );
}

export default EmojiDropDown;
