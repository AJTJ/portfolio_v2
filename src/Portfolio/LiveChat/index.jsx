import React from "react";
import { MarginedContainer, SectionTitle } from "../layout";
import styled from "@emotion/styled";

const ChatWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  background: ${(p) => p.theme.colors.color_1};
`;

const ChatContainer = styled.div`
  border: black solid 1px;
  grid-column: span 12;
  height: 150px;
  background: white;
`;

const LiveChat = () => {
  return (
    <ChatWrapper>
      <MarginedContainer>
        <ChatContainer>Chat Service in here</ChatContainer>
      </MarginedContainer>
    </ChatWrapper>
  );
};

export default LiveChat;
