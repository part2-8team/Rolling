import React from 'react';
import EmojiButton from './EmojiButton';

function EmojiButtonList({ emojiList, setEmojiList }) {
  return (
    <ul>
      {emojiList.map((emoji, i) => (
        <li key={i}>
          <EmojiButton emoji={emoji} setEmojiList={setEmojiList} />
        </li>
      ))}
    </ul>
  );
}

export default EmojiButtonList;
