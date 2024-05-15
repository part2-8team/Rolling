import React, { useEffect, useRef } from 'react';
import { createPicker } from 'picmo';
import { getReactions } from '../../api/recipientApi';

function EmojiContainer({ id, addEmoji, createReaction }) {
  const pickerContainerRef = useRef(null);

  useEffect(() => {
    if (!pickerContainerRef.current) return;

    const picker = createPicker({ rootElement: pickerContainerRef.current });

    picker.addEventListener('emoji:select', (event) => {
      //
      const fetchEmojis = async () => {
        await createReaction(id, { emoji: event.emoji, type: 'increase' });
        const emojiList = await getReactions(id);
        await addEmoji(emojiList);
      };
      fetchEmojis();
    });

    return () => {
      picker.removeEventListener('emoji:select');
    };
  }, []);

  return <div ref={pickerContainerRef} id="EmojiContainer" />;
}

export default EmojiContainer;
