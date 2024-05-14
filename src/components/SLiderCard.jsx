import styled from 'styled-components';
import { bold24, bold16, regular16, regular12 } from '../styles/fontSize';
import {
  selectBackgroundPattern,
  selectBackground,
  selectBackgroundColor,
} from '../utils/SELECT_BACKGROUND';
import { getReactions, getRecipient } from '../api/recipientApi';
import { useEffect, useState } from 'react';
import EmojiButtonList from './EmojiButtonList';
import Propile from './Propile';

function SliderCard({
  id,
  backgroundColor,
  backgroundImageURL,
  messageCount,
  name,
  reactionCount,
  handleCardClick,
}) {
  const [emojiList, setEmojiList] = useState([]);
  const [data, setData] = useState({});
  // 카드 클릭시 디테일 페이지 이동
  const moveToCardDetail = () => {
    handleCardClick(id);
  };

  const background =
    backgroundImageURL !== null
      ? selectBackground(backgroundImageURL)
      : selectBackgroundColor(backgroundColor);

  const backgroundPattern = selectBackgroundPattern(backgroundColor);

  const messageLength = messageCount - 3 < 0 ? 0 : messageCount - 3;

  const profileImage = {
    backgroundImage: `url('https://newsimg.sedaily.com/2023/09/12/29UNLQFQT6_1.jpg')`,
  };

  // 이모지 api
  const handleEmojiData = async () => {
    try {
      const emojis = await getReactions(id);
      setEmojiList(emojis);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    handleEmojiData();
  }, []);

  const handleIdData = async () => {
    try {
      const result = await getRecipient(id);
      setData(result);
    } catch (error) {
      throw new Error('데이터를 불러오지 못했습니다.', error);
    }
  };

  useEffect(() => {
    handleIdData();
  }, []);

  let profileUrl = [];
  if (data && data.recentMessages?.length > 0) {
    profileUrl = data.recentMessages.map((message) => message.profileImageURL);
  }
  console.log(emojiList);
  return (
    <StyleSliderCard style={background} onClick={moveToCardDetail}>
      <StyleCardWrap>
        <StyleMessageWrap>
          <StyleCardName>To. {name}</StyleCardName>
          <StyleCardProfilesWrap>
            <Propile profileUrl={profileUrl} peopleNum={messageCount} />
          </StyleCardProfilesWrap>
          <StyleCardMessages>
            <StyleCardMessageCount>{messageCount}</StyleCardMessageCount>
            명이 작성했어요!
          </StyleCardMessages>
        </StyleMessageWrap>
        <EmojiButtonList
          id={id}
          emojiList={emojiList}
          setEmojiList={setEmojiList}
        />
        {!backgroundImageURL && (
          <StyleBackgroundPattern
            src={backgroundPattern}
            alt="백그라운드 패턴 이미지"
          />
        )}
      </StyleCardWrap>
    </StyleSliderCard>
  );
}

export default SliderCard;

const StyleSliderCard = styled.li`
  width: 275px;
  height: 259px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border: 1px solid #0000001a;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px #00000014;
  transition: 0.5 ease-out;

  position: relative;
  z-index: 1;

  cursor: pointer;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const StyleCardWrap = styled.div`
  width: 227px;
  height: 210px;
  display: flex;
  flex-direction: column;
  gap: 43px;
`;

const StyleMessageWrap = styled.div`
  width: 100%;
  max-width: 227px;
  height: 100%;
  max-height: 114px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyleCardName = styled.h1`
  height: 36px;
  display: flex;
  ${bold24};
`;
const StyleCardProfilesWrap = styled.ul`
  width: 81px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
`;

const StyleCardProfile = styled.li`
  width: 26.5px;
  height: 26.5px;

  border: 1.5px solid #ffffff;
  border-radius: 50%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  &:first-child {
    z-index: 1;
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    z-index: 2;
    top: 0;
    left: 16px;
  }
  &:nth-child(3) {
    z-index: 3;
    top: 0;
    left: 32px;
  }
`;

const StyleCardProfileCount = styled.li`
  width: 33px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-color: #fff;
  border-radius: 30px;
  color: #555555;

  ${regular12}
`;

const StyleCardMessages = styled.span`
  ${regular16}
`;
const StyleCardMessageCount = styled.span`
  ${bold16}
`;

// const StyleEmojiListWrap = styled.div`
//   width: 227px;
//   height: 53px;
//   display: flex;
//   align-items: flex-end;
//   gap: 16px;
//   border-top: 1px solid #0000001f;
// `;

// const StyleEmojiList = styled.ul`
//   width: 199px;
//   height: 36px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 10px;
// `;

// const StyleEmojiMenu = styled.li`
//   width: 65px;
//   height: 36px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: #0000008a;
//   border-radius: 32px;
// `;

// const StyleEmojiMenuWrap = styled.div`
//   width: 100%;
//   height: 20px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 2px;
// `;

// const StyleEmoji = styled.span`
//   font-family: Pretendard;
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 21px;
// `;

// const StyleEmojiCount = styled.span`
//   font-family: Pretendard;
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 21px;
//   color: #fff;
// `;

const StyleBackgroundPattern = styled.img`
  width: 142px;
  height: 142px;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;

  border-radius: 0 0 16px 0;
`;
