// import React from "react";
import styled from "@emotion/styled";
import { mq } from "./theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

export const MarginedContainer = styled(Grid)`
  margin: 0 auto;
  max-width: 1060px;
  /* padding: 0 10px; */
  ${mq[3]} {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const SectionTitle = styled.div`
  grid-column-start: 2;
  grid-column-end: 9;
  font-size: 60px;
  color: ${(p) => p.theme.colors.color_3};
  padding-top: 30px;
`;

export const zNav = 50;
