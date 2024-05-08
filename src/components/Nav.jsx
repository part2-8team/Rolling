import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div``;
const Name = styled.div``;

const PostIdData = styled.div``;

const Written = styled.div``;

const WrittenByIcons = styled.div``;

const Vertical1 = styled.div``;

const Vertical2 = styled.div``;

const ShareButton = styled.button``;

function Nav() {
  return (
    <NavContainer>
      <Name>To.주강산</Name>
      <PostIdData>
        <Written>
          <WrittenByIcons />
          37명이 작성했어요!
        </Written>
        <Vertical1 />
        <EmojiDropDown />
        <Vertical2 />
        <ShareButton>
          <img src="../assets/share24.svg" alt="공유하기버튼" />
        </ShareButton>
      </PostIdData>
    </NavContainer>
  );
}

export default Nav;
