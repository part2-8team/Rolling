import purplePattern from '../assets/IMG-PATTERN01.png';
import beigePattern from '../assets/IMG-PATTERN02.png';
import bluePattern from '../assets/IMG-PATTERN03.png';
import greenPattern from '../assets/IMG-PATTERN04.png';

// 이미지URL 넣는 함수
export const selectBackground = (backgroundImageURL) => {
  if (backgroundImageURL !== null) {
    return {
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${backgroundImageURL})`,
      color: `#fff`,
    };
  }
};

// 백그라운드 컬러 선택 함수
export const selectBackgroundColor = (backgroundColor) => {
  let color;
  switch (backgroundColor) {
    case 'purple':
      color = { backgroundColor: '#ECD9FF', color: `#181818` };
      break;
    case 'beige':
      color = { backgroundColor: '#FFE2AD', color: `#181818` };
      break;
    case 'blue':
      color = { backgroundColor: '#B1E4FF', color: `#181818` };
      break;
    case 'green':
      color = { backgroundColor: '#D0F5C3', color: `#181818` };
      break;
    default:
      color = { backgroundColor: '#FFE2AD', color: `#181818` };
  }
  return color;
};

// 백그라운드 컬러 패턴 골라주는 함수
export const selectBackgroundPattern = (backgroundColor) => {
  let src;
  switch (backgroundColor) {
    case 'purple':
      src = purplePattern;
      break;
    case 'beige':
      src = beigePattern;
      break;
    case 'blue':
      src = bluePattern;
      break;
    case 'green':
      src = greenPattern;
      break;
    default:
      src = beigePattern;
  }
  return src;
};
