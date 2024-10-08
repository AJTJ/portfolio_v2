// import React from "react";
import styled from "@emotion/styled";
import { mq } from "./theme";

export const Text = styled.div`
  font-size: 18px;
  /* grid-column: span 12; */
  grid-column-start: 2;
  grid-column-end: 12;
  padding: 5px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
`;

export const MarginedContainer = styled(Grid)`
  margin: 0 auto;
  max-width: 1060px;
  ${mq[3]} {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const SectionTitle = styled.div`
  grid-column-start: 2;
  grid-column-end: 9;
  font-size: 40px;
  color: ${(p) => p.theme.colors.color_3};
  padding-top: 30px;
`;

export const zNav = 500;

export const Button = styled.button`
  font-size: 15px;
  height: 30px;
  width: 80px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 17px;
  border: solid 1px ${(p) => p.theme.colors.color_3};
  transition: all 0.2s;
  cursor: pointer;
  align-self: center;
  &:hover {
    color: ${(p) => p.theme.colors.color_1};
    background: ${(p) => p.theme.colors.color_3};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq[1]} {
    width: 56px;
    height: 24px;
    font-size: 11px;
  }
`;
