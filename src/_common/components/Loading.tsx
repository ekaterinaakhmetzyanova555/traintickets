import React from "react";

import { CircularProgress } from "@material-ui/core";

import styled, { css } from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 100;

  ${(p) =>
    p.campaignList &&
    css`
      padding-top: ${p.theme.spacing(13)}px;
      background: transparent;
    `}
`;

const CircularProgressStyled = styled(CircularProgress)`
  && {
    position: absolute;
    top: calc(45% - 20px);
    left: calc(50% - 20px);
  }
`;

const Loading = (props) => (
  <Container data-testid="loading" {...props}>
    <CircularProgressStyled size={40} />
  </Container>
);

export const CenteredLoader = styled(Loading)`
  && {
    height: 100vh;
    top: ${(p) => p.theme.spacing(-20)}px;
  }
`;

export default Loading;
