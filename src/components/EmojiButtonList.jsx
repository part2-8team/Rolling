import React from 'react';
import EmojiButton from './EmojiButton';
import styled from 'styled-components';

function EmojiButtonList({ emojiList, setEmojiList }) {
  return (
    <StyledEmojiButtonList>
      {emojiList.map((emoji, i) => (
        <li key={i}>
          <EmojiButton emoji={emoji} setEmojiList={setEmojiList} />
        </li>
      ))}
    </StyledEmojiButtonList>
  );
}

export default EmojiButtonList;

const StyledEmojiButtonList = styled.ul`
  list-style-type: none;
  display: flex;
`;
