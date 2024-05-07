import React from 'react';
import styled from 'styled-components';
import { regular16 } from '../styles/fontSize';

function EmojiButton({ emoji, setEmojiList }) {
  const imojiImage = emoji.emojiImage;
  const imojiCount = emoji.count;
  const code = emoji.emojiCode;

  const onClickEmojiButton = () => {
    const updatedEmoji = { ...emoji, count: emoji.count + 1 };
    setEmojiList((prevEmoji) => {
      return [
        updatedEmoji,
        ...prevEmoji.filter((item) => item.emojiCode !== code),
      ];
    });
  };
  return (
    <EmojiButtonStyled onClick={onClickEmojiButton}>
      <span>{imojiImage}</span>
      <span>{imojiCount}</span>
    </EmojiButtonStyled>
  );
}

export default EmojiButton;

const EmojiButtonStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.54);
  color: var(--white);
  ${regular16}
  padding: 8px 12px;
  border-radius: 32px;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.64);
  }
`;
