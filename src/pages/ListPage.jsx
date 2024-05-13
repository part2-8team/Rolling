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

function ListPage() {
  const [movePopularSlider, setMovePopularSlider] = useState(0);
  const [moveRecentSlider, setMoveRecentSlider] = useState(0);
  const popularSlider = useRef(null);
  const recentSlider = useRef(null);
  const popularSliderValue = 'popular';
  const recentSliderValue = 'recent';
  const nav = useNavigate();

  const [popularItems, setPopularItems] = useState([]);
  const [recentItems, setRecentItems] = useState([]);

  // 페이지네이션 기능 추가 예정
  const getRecipientsItems = async () => {
    // const allItemsCount = await getRecipientsCount();
    const recipientsAllItems = await getRecipientsAll({
      limit: 32,
      offset: null,
    });
    const popularAllItems = JSON.parse(JSON.stringify([...recipientsAllItems]));
    const recentAllItems = JSON.parse(JSON.stringify([...recipientsAllItems]));
    const sortedPopular = popularAllItems.sort(
      (a, b) => b['reactionCount'] - a['reactionCount'],
    );
    const sortedRecent = recentAllItems.sort(
      (a, b) => new Date(a['createdAt']) - new Date(b['createdAt']),
    );
    setPopularItems(sortedPopular);
    setRecentItems(sortedRecent);
  };

  useEffect(() => {
    getRecipientsItems();
  }, []);

  const moveToPost = () => {
    nav('/post');
  };

  // 슬라이더 버튼 구분을 위한 함수
  const handleClickNext = (state, value) => {
    if (value === 'popular') {
      const moveNext = state - SLIDE;
      setMovePopularSlider(moveNext);
    }

    if (value === 'recent') {
      const moveNext = state - SLIDE;
      setMoveRecentSlider(moveNext);
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
        title="인기 롤링 페이퍼 🔥"
        moveSlider={movePopularSlider}
        sliderRef={popularSlider}
        clickNext={handleClickNext}
        clickPrev={handleClickPrev}
        value={popularSliderValue}
      />
      <ListSlider
        title="최근에 만든 롤링 페이퍼 ⭐️"
        moveSlider={moveRecentSlider}
        sliderRef={recentSlider}
        clickNext={handleClickNext}
        clickPrev={handleClickPrev}
        value={recentSliderValue}
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
