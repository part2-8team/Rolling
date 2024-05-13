import React, { useEffect, useState } from 'react';
import EmojiContainer from './EmojiContainer';
import EmojiButtonList from './EmojiButtonList';
import { createReaction, getReactions } from '../api/recipientApi';

function EmojiComponents() {
  const [emojiList, setEmojiList] = useState([]);

  // 임의 id 설정
  const id = 6945;

  useEffect(() => {
    const fetchEmojis = async () => {
      const emojis = await getReactions(id);
      await setEmojiList(emojis);
    };
    fetchEmojis();
  }, []);

  return (
    <div>
      <EmojiContainer
        id={id}
        addEmoji={setEmojiList}
        createReaction={createReaction}
      />
      <EmojiButtonList
        id={id}
        emojiList={emojiList}
        setEmojiList={setEmojiList}
      />
    </div>
  );
}

export default EmojiComponents;
