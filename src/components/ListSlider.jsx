import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import SliderButton from '../components/SliderButton';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import { useEffect, useState } from 'react';
import SliderCard from './SLiderCard';
import { useNavigate } from 'react-router-dom';

const SLIDE = 295;

function ListSlider({
  title,
  moveSlider,
  sliderRef,
  clickNext,
  clickPrev,
  value,
  moveTouchSlider,
  handleOnTouchStart,
  handleOnTouchMove,
  handleOnTouchEnd,
  cardItems,
}) {
  const navigate = useNavigate();
  // StyleSliderWrap 의 너비값 (295 * 요소의 개수 - 첫 요소 왼쪽 마진값)
  const sliderWidth = SLIDE * cardItems.length - 20;
  // 다음 버튼 클릭시, 마지막 요소만 보여줘야 하는 기준 마지막 4개만 남았을때의 px값
  const sliderEnd = (cardItems.length - 4) * -SLIDE;
  // 처음 요소가 보일시, 버튼 단락회로 평가
  const isPrev = moveSlider >= 0 ? false : true;
  // 마지막 요소가 보일시, 버튼 단락회로 평가
  const isNext =
    sliderEnd >= 1 ? false : moveSlider === sliderEnd ? false : true;
  // 카드 클릭시 디테일 페이지 이동
  const handleCardClick = (id) => {
    navigate(`/post/${id}`);
  };

  // 수정 예정
  const onClickNext = () => {
    clickNext(moveSlider, value);
  };

  // 수정 예정
  const onClickPrev = () => {
    clickPrev(moveSlider, value);
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(${moveSlider}px)`;
  }, [moveSlider]);

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(${moveTouchSlider}px)`;
  }, [moveTouchSlider]);

  // 터치 스와이프
  // 기능 수정 및 페이지네이션 기능 추가 예정
  const onTouchStart = (e) => {
    handleOnTouchStart(e);
  };

  const onTouchMove = (e) => {
    handleOnTouchMove(e);
  };

  const onTouchEnd = (e) => {
    const isTouches = e.touches[0];
    if (!isTouches) return;
    handleOnTouchEnd(e);
  };

  useEffect(() => {
    console.log('translateX의 값', moveTouchSlider);
  }, [moveTouchSlider]);

  return (
    <StyleSection>
      <SectionTitle title={title} />
      {isPrev && (
        <SliderButton
          value={value}
          className="prev-button"
          src={arrowLeft}
          alt="이전 버튼"
          onClick={onClickPrev}
        />
      )}
      <StyleSliderWrap
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <StyleSlider ref={sliderRef} width={sliderWidth}>
          {cardItems.map((card) => (
            <SliderCard
              key={card.id}
              {...card}
              handleCardClick={handleCardClick}
            />
          ))}
        </StyleSlider>
      </StyleSliderWrap>
      {isNext && (
        <SliderButton
          value={value}
          className="next-button"
          src={arrowRight}
          alt="다음 버튼"
          onClick={onClickNext}
        />
      )}
    </StyleSection>
  );
}

export default ListSlider;

// Styled-Component
const StyleSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  position: relative;

  .prev-button {
    top: 50%;
    left: -20px;
  }

  .next-button {
    top: 50%;
    right: 20px;
  }
`;
const StyleSliderWrap = styled.div`
  width: 1160px;
  height: 262px;

  position: relative;
  overflow: hidden;
`;

const StyleSlider = styled.ul`
  width: ${({ width }) => width}px;
  height: 260px;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  transition: all 0.5s ease-in;
`;
