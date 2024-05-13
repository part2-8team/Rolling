export const mapFont = (fontName) => {
  switch (fontName) {
    case 'Noto Sans':
      return 'Noto Sans';
    case 'Pretendard':
      return 'Pretendard';
    case '나눔명조':
      return 'NanumMyeongjo';
    case '나눔손글씨 손편지체':
      return 'NanumPen';
    default:
      return 'Pretendard';
  }
};
