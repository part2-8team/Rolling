import styled from 'styled-components';
import Header from '../components/Header';
import Button from '../components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  bold14,
  bold18,
  bold24,
  regular15,
  regular18,
} from '../styles/fontSize';
import card01 from '../assets/IMG-LENDING1.png';
import card02 from '../assets/IMG-LENDING2.png';
import Nav from '../components/PostId/Nav';

function MainPage(props) {
  const nav = useNavigate();

  return (
    <>
      <Header />
      <Nav/>
      <MainPageStyledComponent>
        <div className="MainPage">
          <div className="sections">
            <section>
              <div className="sectionImage">
                <img src={card01} alt="롤링 페이퍼 이미지 1" />
              </div>
              <div className="sectionTitle">
                <div className="point">Point 01</div>
                <h3 className="title">
                  누구나 손쉽게, 온라인 <br /> 롤링 페이퍼를 만들 수 있어요.
                </h3>
                <div className="desc">로그인 없이 자유롭게 만들어요</div>
              </div>
            </section>
            <section>
              <div className="sectionImage">
                <img src={card02} alt="롤링 페이퍼 이미지 2" />
              </div>
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
        box-sizing: border-box;

        & .sectionImage {
          width: 720px;
          text-align: center;
        }

        & .sectionTitle {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

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
            margin: 16px 0 8px;
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
    & > button {
      margin: 0 auto;
    }
    @media (max-width: 1200px) {
      & .sections {
        & section {
          width: 95%;
          flex-direction: column-reverse;
          padding: 0;
          gap: 36px;
          align-items: center;

          & .sectionTitle {
            margin: 40px 40px 0;
            align-items: center;

            & br {
              display: inline-block;
              content: ' ';
            }
          }
        }

        & section:nth-child(2) {
          flex-direction: column-reverse;
          gap: 36px;

          & .sectionImage {
            > img {
              width: auto;
            }
          }
        }
      }
    }
    @media (max-width: 768px) {
      padding: 0 20px;

      & .sections {
        & section {
          width: 100%;
          margin: 0;
          gap: 36px;
          margin: 16px 4px;

          & .sectionImage {
            width: 100%;
            height: 161px;
            display: flex;
            overflow: hidden;
            margin: 0 auto 40px;
            align-items: center;
            text-align: center;
            justify-content: center;

            > img {
              display: inline-block;
              width: 100%;
              min-width: 434.51px;
            }
          }
        }

        & section:nth-child(2) {
          flex-direction: column-reverse;
          gap: 0;
          gap: 36px;
          & .sectionImage {
            width: 100%;
            height: auto;
            > img {
              width: 100%;
              min-width: initial;
            }
          }
        }
      }
      & > button {
        width: 100%;
        margin-bottom: 24px;
      }
    }
    @media (max-width: 360px) {
      gap: 61px;

      & .sections {
        & section {
          margin: 0;
          & .sectionTitle {
            align-items: flex-start;

            & .title {
              ${bold18}
            }

            & .desc {
              ${regular15}
            }

            & br {
              display: initial;
              content: initial;
            }
          }
        }
      }
    }
  }
`;
