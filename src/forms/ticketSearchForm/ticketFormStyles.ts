import styled from "styled-components";
import FormTitleWrapper from "../../_common/components/FormTitleWrapper";

export const HeaderContainer = styled(FormTitleWrapper)`
  border-bottom: solid 1px ${(p) => p.theme.palette.grey[300]};
`;

export const Body = styled.div`
  height: 100%;
  overflow-x: hidden;
  padding: 8px 24px 24px 24px;
`;

export const StyledDialogActions = styled.div`
  && {
    margin: 0;
    padding: ${(p) => p.theme.spacing(1)}px;
    align-content: center;
    height: ${(p) => p.theme.spacing(7)}px;
    border-top: solid 1px ${(p) => p.theme.palette.grey[300]};
    display: flex;
  }
`;
