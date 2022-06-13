import styled from "styled-components";

export const TicketSearch = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const TicketSearchBackground = styled.fieldset`
  border: none;
`;

export const DoubleSliderWrap = styled.div`
`;

export const SectionWrap = styled.div`
  background-color: #3E3C41;
  border-bottom: 1px solid #E5E5E5;
  
  padding-top: 43px;
  padding-left: 28px;
  padding-right: 36px;
  padding-bottom: 18px;

  & > span {
    margin-left: auto;
    align-self: flex-start;
    font-size: 30px;
    flex-basis: 100%;
    padding-bottom: 5px;
  }
`;

export const DatesSearchWrap = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  padding-bottom: 10px;
  
  & > div {
    align-self: flex-start;
    font-size: 30px;
    flex-basis: 100%;
    padding-bottom: 5px;
  }
  
  & > input {
    padding: 5px 10px; 
    line-height: 28px;
  }
`;

export const SwitchItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  & > .switcher {
    flex: 1;
  }

  & > .svg-item {
    flex: 1;
  }
  
  & > .font-search-panel {
    flex: 1;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    margin-left: 11px;
  }
`;
