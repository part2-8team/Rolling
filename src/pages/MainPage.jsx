import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { bold14, bold24, regular18 } from '../styles/fontSize';
import card01 from '../assets/img-mainPageCard01.png';
import card02 from '../assets/img-mainPageCard02.png';

function MainPage(props) {
  const nav = useNavigate();

  return (
    <>
      <Header />
      <MainPageStyledComponent>
        <div className="MainPage">
          <div className="sections">
            <section>
              <img src={card01} alt="롤링 페이퍼 이미지 1" />
              <div className="sectionTitle">
                <div className="point">Point 01</div>
                <h3 className="title">
                  누구나 손쉽게, 온라인 <br /> 롤링 페이퍼를 만들 수 있어요.
                </h3>
                <div className="desc">로그인 없이 자유롭게 만들어요</div>
              </div>
            </section>
            <section>
              <img src={card02} alt="롤링 페이퍼 이미지 2" />
              <div className="sectionTitle">
                <div className="point">Point 02</div>
                <h3 className="title">
                  서로에게 이모지로 감정을
                  <br /> 표현해보세요
                </h3>
                <div className="desc">
                  롤링 페이퍼에 이모지를 추가할 수 있어요
                </div>
              </div>
            </section>
          </div>
          <Button
            text={'구경해보기'}
            onClick={() => {
              nav('/list');
            }}
          />
        </div>
      </MainPageStyledComponent>
    </>
  );
}

export default MainPage;

const MainPageStyledComponent = styled.div`
  .MainPage {
    margin-top: 124px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    & .sections {
      display: flex;
      flex-direction: column;
      gap: 30px;

      & section {
        width: 1200px;
        margin: 0 auto;
        border-radius: 16px;
        background-color: var(--surface);
        display: flex;
        gap: 152px;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 60px 0;
        flex-direction: row-reverse;

        & > img {
          background-color: red;
        }

        & .sectionTitle {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background-color: blue;

          & .point {
            display: inline;
            padding: 6px 12px;
            background-color: var(--purple600);
            color: var(--white);
            border-radius: 50px;
            ${bold14}
          }

          & .title {
            ${bold24}
          }

          & .desc {
            ${regular18}
          }
        }
      }

      & section:nth-child(2) {
        flex-direction: row;
        gap: 0;

        & .sectionImage {
          margin-left: 0;
        }
      }
    }
    & .MainPageCard {
      border-radius: 11.85px;
      border: 1px solid #dbd9e9;
      background-color: var(--white);
      padding: 18px 12px 14px;

      & .cardProfile {
        display: flex;
        gap: 7.75px;
        align-items: center;
        padding-bottom: 10.67px;
        border-bottom: 1px solid #e1e1e1;

        & .profileImage {
          max-width: 31px;
          height: 31px;
          border-radius: 9999px;
          background-color: purple;
          flex-grow: 0;
          position: relative;
          flex-shrink: 0;
          flex-grow: 1;

          & img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        & .profileName {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: auto;

          & > .name {
            font-size: 11.85px;
          }

          & > .relation {
          }
        }
      }
      & .cardContent {
        color: var(--gray500);
        height: 53px;
        font-size: 11.85px;
        margin: 8px 0 9px;
      }
    }
    & > button {
      margin: 0 auto;
    }
  }
`;
