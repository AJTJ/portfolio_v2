import React from "react";
import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

export const MarginedContainer = styled(Grid)`
  margin: 0 auto;
  max-width: 1060px;
  /* padding: 0 10px; */
`;
