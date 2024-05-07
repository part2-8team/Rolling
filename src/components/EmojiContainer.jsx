import React, { useEffect, useRef } from 'react';
import { createPicker } from 'picmo';
import styled from 'styled-components';

function EmojiContainer({ addEmoji }) {
  const pickerContainerRef = useRef(null);

  useEffect(() => {
    if (!pickerContainerRef.current) return;

    const picker = createPicker({ rootElement: pickerContainerRef.current });

    picker.addEventListener('emoji:select', (event) => {
      //

      addEmoji((prevEmojis) => {
        // 기존 이모지 중에 있는가? 있다면 curEmoji에 담기
        const curEmoji = prevEmojis.find(
          (prevEmoji) => String(prevEmoji.emojiCode) === String(event.hexcode),
        );

        if (curEmoji) {
          // curEmoji가 true일 시 curEmoji의 count값 1 증가
          curEmoji.count++;
          return [
            curEmoji,
            ...prevEmojis.filter(
              (prevEmoji) =>
                String(prevEmoji.emojiCode) !== String(event.hexcode),
            ),
          ];
        } else {
          // curEmoji가 false일 시 새로운 emoji 추가
          const newEmoji = {
            emojiImage: event.emoji,
            emojiCode: event.hexcode,
            count: 1,
          };
          return [newEmoji, ...prevEmojis];
        }
      });
    });

    return () => {
      picker.removeEventListener('emoji:select');
    };
  }, []);

  return <div ref={pickerContainerRef} id="EmojiContainer" />;
}

export default EmojiContainer;
