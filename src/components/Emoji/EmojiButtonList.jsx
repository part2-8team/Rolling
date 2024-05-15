import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';
import EmojiButton from './EmojiButton';
import { regular16 } from '../../styles/fontSize';
import ArrowDown from '../../assets/arrow-down.svg';

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownArrow = styled.button`
  background-color: var(--white);
  min-width: 2.4rem;
  height: 2.4rem;
  box-sizing: border-box;
  margin: 0.6rem 1.4rem 0.6rem 0.6rem;
  position: relative;
  border: 0px;

  @media (max-width: 470px) {
    margin-right: 0.8rem;
    min-width: 1.6rem;
    height: 1.6rem;
  }
`;

const Emoji = styled.span`
  padding: 0 0.2rem;
  margin-right: 0.2rem;
`;

const EmojiGroupInDropDown = styled.div`
  width: 31.2rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 6.3rem 6.3rem 6.3rem 6.3rem;
  border: 10px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;
  z-index: 9999;
  display: flex;
  border-radius: 0.8rem;
  border: 0.1rem solid #b6b6b6;
  background: var(--white);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
  padding: 2.4rem;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 570px) {
    right: -90px;
  }
`;

const EmojiImg = styled.div`
  ${FlexCenter}
  box-sizing : border-box;
  margin : 0;
  padding: 0.6rem 1.2rem;
  width: 6.3rem;
  height: 3.8rem;
  gap: 0.2rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  color: var(--white);
  ${regular16}

  @media (max-width: 470px) {
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
  }
`;

const ArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MarginRight = styled.div`
  margin-right: 2.8rem;
`;

const StyledEmojiButtonList = styled.ul`
  display: flex;
  gap: 1rem;
  width: 20.8rem;
  justify-content: space-between;
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

function EmojiButtonList({ id, emojiList, setEmojiList, isNav }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  useEffect(() => {
    console.log(emojiList);
  }, [id]);

  return (
    <>
      <StyledEmojiButtonList>
        {emojiList.slice(0, 3).map((emoji, i) => (
          <li key={i}>
            <EmojiButton emoji={emoji} setEmojiList={setEmojiList} id={id} />
          </li>
        ))}
      </StyledEmojiButtonList>
      {isNav &&
        emojiList.length > 0 &&
        (emojiList.length > 3 ? (
          <DownArrow onClick={() => setIsDropDownOpen((prev) => !prev)}>
            <ArrowImage src={ArrowDown} alt="" />
            {isDropDownOpen && (
              <DropdownMenu>
                <EmojiGroupInDropDown>
                  {emojiList.slice(3, 11).map((emoji) => (
                    <EmojiImg key={emoji.unified}>
                      <Emoji>{emoji.emoji}</Emoji>
                      <span>{emoji.count}</span>
                    </EmojiImg>
                  ))}
                </EmojiGroupInDropDown>
              </DropdownMenu>
            )}
          </DownArrow>
        ) : (
          <MarginRight />
        ))}
      {emojiList.length === 0 && <div />}
    </>
  );
}
export default EmojiButtonList;
