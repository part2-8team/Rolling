import React from 'react';
import styled from 'styled-components';
import { regular16 } from '../styles/fontSize';
import { createReaction, getReactions } from '../api/recipientApi';

function EmojiButton({ emoji, setEmojiList, id }) {
  const emojiImage = emoji.emoji;
  const emojiCount = emoji.count;
  const code = emoji.emojiCode;

  const onClickEmojiButton = async () => {
    await createReaction(id, { emoji: emoji.emoji, type: 'increase' });
    const emojiList = await getReactions(id);
    await setEmojiList(emojiList);
  };
  return (
    <EmojiButtonStyled onClick={onClickEmojiButton}>
      <span>{emojiImage}</span>
      <span>{emojiCount}</span>
    </EmojiButtonStyled>
  );
}

export default EmojiButton;

const EmojiButtonStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.54);
  color: var(--white);
  ${regular16}
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.64);
  }
`;
