import styled from "styled-components";

const FormTitleWrapper = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    padding: ${(p) => p.theme.spacing(1.75)}px ${(p) => p.theme.spacing(3)}px;

    button {
      padding: 0;
    }
  }
`;

export default FormTitleWrapper;
