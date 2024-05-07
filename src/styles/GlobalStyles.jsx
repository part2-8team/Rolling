import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  :root {
    --purple100: #f8f0ff;
    --purple200: #ecd9ff;
    --purple300: #dcb9ff;
    --purple400: #c894fd;
    --purple500: #ab57ff;
    --purple600: #9935ff;
    --purple700: #861dee;
    --purple800: #6e0ad1;
    --purple900: #5603a7;

    --gray100: #f6f6f6;
    --gray200: #eee;
    --gray300: #ccc;
    --gray400: #999;
    --gray500: #555;
    --gray600: #4a4a4a;
    --gray700: #3a3a3a;
    --gray800: #2b2b2b;
    --gray900: #181818;

    --orange100: #fff0d6;
    --orange200: #ffe2ad;
    --orange300: #ffc583;
    --orange400: #ffae65;
    --orange500: #ff8832;

    --blue100: #e2f5ff;
    --blue200: #b1e4ff;
    --blue300: #7cd2ff;
    --blue400: #34b9ff;
    --blue500: #00a2fe;

    --green100: #e4fbdc;
    --green200: #d0f5c3;
    --green300: #9be282;
    --green400: #60cf37;
    --green500: #2ba600;

    --black: #000;
    --white: #fff;
    --error: #dc3a3a;
    --surface: #f6f8ff;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  blockquote,
  q {
    quotes: none;
  }
  
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  html {
    font-size: 62.5%;
  }

  body {
    font-size: 62.5%;
    font-family: 'Pretendard';
  }
`;
export default GlobalStyles;
