import React, { useState } from 'react';
import EmojiContainer from './EmojiContainer';
import EmojiButtonList from './EmojiButtonList';

function EmojiComponents() {
  const [emojiList, setEmojiList] = useState([]);

  return (
    <div>
      <EmojiContainer addEmoji={setEmojiList} />
      <EmojiButtonList emojiList={emojiList} setEmojiList={setEmojiList} />
    </div>
  );
}

export default EmojiComponents;
