import styled from 'styled-components';
import SectionTitle from '../components/SliderTitle';
import SliderButton from '../components/SliderButton';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';
import { useEffect } from 'react';

const sliderCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SLIDE = 295;

function ListSlider({
  title,
  moveSlider,
  sliderRef,
  clickNext,
  clickPrev,
  value,
}) {
  // StyleSliderWrap 의 너비값 (295 * 요소의 개수 - 첫 요소 왼쪽 마진값)
  const sliderWidth = SLIDE * sliderCards.length - 20;
  // 다음 버튼 클릭시, 마지막 요소만 보여줘야 하는 기준 마지막 4개만 남았을때의 px값
  const sliderEnd = (sliderCards.length - 4) * -SLIDE;
  // 처음 요소가 보일시, 버튼 단락회로 평가
  const isPrev = moveSlider >= 0 ? false : true;
  // 마지막 요소가 보일시, 버튼 단락회로 평가
  const isNext =
    sliderEnd >= 1 ? false : moveSlider === sliderEnd ? false : true;

  const onClickNext = () => {
    clickNext(moveSlider, value);
  };

  const onClickPrev = () => {
    clickPrev(moveSlider, value);
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(${moveSlider}px)`;
  }, [moveSlider]);

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
      <StyleSliderWrap>
        <StyleSlider ref={sliderRef} width={sliderWidth}>
          {sliderCards.map((card) => (
            <StyleSliderCard key={card}>{card}</StyleSliderCard>
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

const StyleSliderCard = styled.li`
  width: 275px;
  height: 260px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #0000001a;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px #00000014;
  transition: 0.5 ease-out;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
