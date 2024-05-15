import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipientsAll, getRecipientsCount } from '../api/recipientApi';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import ListSlider from '../components/ListSlider';
import Header from '../components/Header';
import CreateButton from '../components/Button/CreateButton';
// 슬라이더 클릭 한번당 움직일 px
const SLIDE = 295;
const LIMIT = 16;

function ListPage() {
  const [movePopularSlider, setMovePopularSlider] = useState(0);
  const [moveRecentSlider, setMoveRecentSlider] = useState(0);
  const [popularItems, setPopularItems] = useState([]);
  const [recentItems, setRecentItems] = useState([]);
  const [popularOffset, setPopularOffset] = useState(0);
  const [recentOffset, setRecentOffset] = useState(0);
  const popularSliderValue = 'popular';
  const recentSliderValue = 'recent';
  const nav = useNavigate();

  // 페이지네이션
  const getRecipientsAllItems = async ({ limit, offset }) => {
    const recipientsAllItems = await getRecipientsAll({
      limit,
      offset,
    });
    return recipientsAllItems;
  };

  const getPopularItems = async ({ limit, offset }) => {
    const recipientsAllItems = await getRecipientsAllItems({ limit, offset });
    const sortedPopular = JSON.parse(
      JSON.stringify([...recipientsAllItems]),
    ).sort((a, b) => b['reactionCount'] - a['reactionCount']);
    if (offset === 0) {
      setPopularItems(sortedPopular);
    } else {
      setPopularItems((prevItems) => [...prevItems, ...sortedPopular]);
    }
  };

  const getRecentItems = async ({ limit, offset }) => {
    const recipientsAllItems = await getRecipientsAllItems({ limit, offset });
    const sortedRecent = JSON.parse(
      JSON.stringify([...recipientsAllItems]),
    ).sort((a, b) => new Date(b['createdAt']) - new Date(a['createdAt']));

    console.log(sortedRecent);

    if (offset === 0) {
      setRecentItems(sortedRecent);
    } else {
      setRecentItems((prevItems) => [...prevItems, ...sortedRecent]);
    }
  };

  const loadMorePopularItems = ({ limit, offset }) => {
    getPopularItems({ limit, offset });
  };

  const loadMoreRecentItems = ({ limit, offset }) => {
    getRecentItems({ limit, offset });
  };

  useEffect(() => {
    getPopularItems({ limit: LIMIT, offset: 0 });
    getRecentItems({ limit: LIMIT, offset: 0 });
  }, []);

  useEffect(() => {
    loadMorePopularItems({ limit: LIMIT, offset: popularOffset });
  }, [popularOffset]);

  useEffect(() => {
    loadMoreRecentItems({ limit: LIMIT, offset: recentOffset });
  }, [recentOffset]);

  // 나도 만들어 보기 버튼 클릭시 페이지 이동
  const moveToPost = () => {
    nav('/post');
  };

  // 슬라이더 버튼 구분을 위한 함수
  const handleClickNext = (state, value, sliderEnd, sliderLength) => {
    if (value === 'popular') {
      const moveNext = state - SLIDE;
      setMovePopularSlider(moveNext);
      if (moveNext === sliderEnd) {
        const itemsLength = sliderLength;
        setPopularOffset(popularOffset + itemsLength);
      }
    }

    if (value === 'recent') {
      const moveNext = state - SLIDE;
      setMoveRecentSlider(moveNext);
      if (moveNext === sliderEnd) {
        const itemsLength = sliderLength;
        setRecentOffset(recentOffset + itemsLength);
      }
    }
  };

  // 슬라이더 버튼 구분을 위한 함수
  const handleClickPrev = (state, value) => {
    if (value === 'popular') {
      const movePrev = state + SLIDE;
      setMovePopularSlider(movePrev);
    }

    if (value === 'recent') {
      const movePrev = state + SLIDE;
      setMoveRecentSlider(movePrev);
    }
  };

  // 슬라이더 터치 스와이프
  // 터치스와이프 기능
  // transform = translateX가 움직일 px값
  const [touchMove, setTouchMove] = useState(0);
  // 터치한 좌표값
  const [upDateX, setUpDateX] = useState({
    startX: 0,
    nowX: 0,
    endX: 0,
  });

  // 터치 시작점의 좌표
  const handleOnTouchStart = (e) => {
    const startClientX = e.touches[0].clientX;
    setUpDateX({ ...upDateX, startX: startClientX });
    console.log('시작점', e.touches[0].clientX);
  };

  // 터치 시작점으로 부터 이동한 x좌표값
  const handleOnTouchMove = (e) => {
    const movingClientX = e.touches[0].clientX;
    const { startX } = upDateX;
    // 현재 translateX의 값 + 움직인 위치 - 시작점
    const touchMoveTranslateX = touchMove + movingClientX - startX;
    setTouchMove(touchMoveTranslateX);
  };

  const handleOnTouchEnd = (e) => {
    const endClientX = e.touches[0].clientX;
    console.log('터치 끝', e.touches[0].clientX);
  };

  return (
    <>
      <Header
        event={
          <CreateButton
            onClick={() => nav('/post')}
            text={'롤링 페이퍼 만들기'}
          />
        }
      />
      <StyleContainer>
        <ListSlider
          title={'인기 롤링 페이퍼 🔥'}
          moveSlider={movePopularSlider}
          clickNext={handleClickNext}
          clickPrev={handleClickPrev}
          value={popularSliderValue}
          moveTouchSlider={touchMove}
          handleOnTouchStart={handleOnTouchStart}
          handleOnTouchMove={handleOnTouchMove}
          handleOnTouchEnd={handleOnTouchEnd}
          cardItems={popularItems}
        />
        <ListSlider
          title={'최근에 만든 롤링 페이퍼 ⭐️'}
          moveSlider={moveRecentSlider}
          clickNext={handleClickNext}
          clickPrev={handleClickPrev}
          value={recentSliderValue}
          cardItems={recentItems}
        />
        <StyleSection className="button-section">
          <Button text="나도 만들어보기" onClick={moveToPost} />
        </StyleSection>
      </StyleContainer>
    </>
  );
}

export default ListPage;

// Styled-Components
const StyleContainer = styled.div`
  width: 100%;
  max-width: 1201px;
  height: 100%;
  margin: 114px auto 0 auto;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .button-section {
    width: 1201px;
    height: 104px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyleSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;
