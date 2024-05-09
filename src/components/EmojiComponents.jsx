import React, { useState } from 'react';
import EmojiContainer from './EmojiContainer';
import EmojiButtonList from './EmojiButtonList';
import { createReaction } from '../api/recipientApi';

function EmojiComponents() {
  const [emojiList, setEmojiList] = useState([]);
  console.dir(createReaction);

  return (
    <div>
      <EmojiContainer addEmoji={setEmojiList} />
      <EmojiButtonList emojiList={emojiList} setEmojiList={setEmojiList} />
    </div>
  );
}

export default EmojiComponents;
