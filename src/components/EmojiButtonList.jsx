import React, { useEffect } from 'react';
import EmojiButton from './EmojiButton';
import styled from 'styled-components';
import { getReactions } from '../api/recipientApi';

function EmojiButtonList({ id, emojiList, setEmojiList }) {
  useEffect(() => {
    console.log(emojiList);
  }, [id]);

  return (
    <StyledEmojiButtonList>
      {emojiList.map((emoji, i) => (
        <li key={i}>
          <EmojiButton emoji={emoji} setEmojiList={setEmojiList} id={id} />
        </li>
      ))}
    </StyledEmojiButtonList>
  );
}

export default EmojiButtonList;

const StyledEmojiButtonList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
