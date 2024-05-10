import styled, { css } from 'styled-components';
import EmojiPicker from 'emoji-picker-react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createReaction, getReactions } from '../api/recipientApi';
import { regular16 } from '../styles/fontSize';

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmojiGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const EmojiBadge = styled.div`
  ${FlexCenter}
  padding: 0.8rem 1.2rem;
  width: 6.3rem;
  gap: 0.2rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  color: var(--white);
  ${regular16}

  @media (max-width: 470px) {
    font-size: 1.4rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Emoji = styled.span`
  padding: 0 0.2rem;
  margin-right: 0.2rem;
`;

const DownArrow = styled.button`
  min-width: 2.4rem;
  height: 2.4rem;
  box-sizing: border-box;
  margin: 0.6rem 1.4rem 0.6rem 0.6rem;
  position: relative;

  @media (max-width: 470px) {
    margin-right: 0.8rem;
    min-width: 1.6rem;
    height: 1.6rem;
  }
`;

const MarginRight = styled.div`
  margin-right: 2.8rem;
`;

const ArrowImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;
  z-index: 9999;

  display: flex;

  border-radius: 0.8rem;
  border: 0.1rem solid #b6b6b6;
  background: var(--white);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);

  padding: 2.4rem;

  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 570px) {
    right: -90px;
  }
`;

const EmojiGroupInDropDown = styled(EmojiGroup)`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: 6.3rem 6.3rem 6.3rem 6.3rem;
`;

const EmojiAddButton = styled.div`
  position: relative;
  padding: 0.6rem 1.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  background: var(--${({ disabled }) => (disabled ? 'gray300' : 'white')});
  color: var(--${({ disabled }) => (disabled ? 'white' : 'gray900')});
  border: 1px solid var(--gray300);
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  ${regular16}

  &:hover {
    background: var(--gray100);
  }

  &:active {
    background: var(--gray100);
  }

  &:focus {
    border: 1px solid var(--gray500);
  }

  @media (max-width: 470px) {
    span {
      display: none;
    }
    padding: 0.6rem 0.8rem;
  }

  @media (max-width: 371px) {
    padding: 0.5rem;
  }
`;

const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;
  z-index: 9999;

  @media (max-width: 447px) {
    right: -60px;
  }
`;

function EmojiDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [badges, setBadges] = useState([]);
  const { id: recipient_id } = useParams();

  const handleEmojiPicker = () => {
    setIsOpen(!isOpen);
  };
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleEmojiData = async () => {
    try {
      const response = await getReactions(recipient_id);
      const data = response.results.map((item) => ({
        unified: item.id,
        emoji: item.emoji,
        count: item.count,
      }));
      setBadges(data);
    } catch (error) {
      throw new Error('Failed to fetch data', error);
    }
  };

  const openEmojiPicker = (emojiData) => {
    const updateBadges = async () => {
      let newCount = 0;

      setBadges((prevBadges) => {
        let newBadges;
        const exists = prevBadges.some(
          (badge) => badge.emoji === emojiData.emoji,
        );
        if (exists) {
          newBadges = prevBadges.map((badge) => {
            if (badge.emoji === emojiData.emoji) {
              newCount = badge.count + 1;
              return { ...badge, count: newCount };
            }
            return badge;
          });
        } else {
          newCount = 1;
          newBadges = [...prevBadges, { ...emojiData, count: newCount }];
        }
        newBadges.sort((a, b) => b.count - a.count);
        return newBadges;
      });
      const data = {
        emoji: emojiData.emoji,
        type: 'increase',
      };

      await createReaction(recipient_id, data);
    };

    updateBadges().then(() => {
      setIsOpen(false);
    });
  };

  useEffect(() => {
    handleEmojiData();
  }, []);

  return (
    <>
      <EmojiGroup>
        {badges.slice(0, 3).map((badge) => (
          <EmojiBadge key={badge.unified}>
            <Emoji>{badge.emoji}</Emoji>
            <span>{badge.count}</span>
          </EmojiBadge>
        ))}
      </EmojiGroup>
      {badges.length > 0 &&
        (badges.length > 3 ? (
          <DownArrow onClick={() => setIsDropDownOpen((prev) => !prev)}>
            <ArrowImage src="/img/arrow_down.svg" alt="" />
            {isDropDownOpen && (
              <DropdownMenu>
                <EmojiGroupInDropDown>
                  {badges.slice(3, 11).map((badge) => (
                    <EmojiBadge key={badge.unified}>
                      <Emoji>{badge.emoji}</Emoji>
                      <span>{badge.count}</span>
                    </EmojiBadge>
                  ))}
                </EmojiGroupInDropDown>
              </DropdownMenu>
            )}
          </DownArrow>
        ) : (
          <MarginRight />
        ))}
      {badges.length === 0 && <div />}

      <EmojiAddButton onClick={handleEmojiPicker}>
        <img src="/img/emojiAdd.svg" alt="" />
        <span>추가</span>
        {isOpen && (
          <EmojiPickerWrapper onClick={stopPropagation}>
            <EmojiPicker
              emojiStyle="native"
              onEmojiClick={(emojiData) => {
                openEmojiPicker(emojiData);
              }}
            />
          </EmojiPickerWrapper>
        )}
      </EmojiAddButton>
    </>
  );
}

export default EmojiDropDown;
