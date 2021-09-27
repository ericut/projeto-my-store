import styled from 'styled-components';

export const RadioComboContainer = styled.div`
  display: flex;
  flex-direction: column;
  * {
    transition: 0.4s all;
    *:before,
    *:after {
      box-sizing: border-box;
    }
  }
  .radioGroup {
    display: flex;
    margin-top: 4px;
    height: 32px;
    gap: 6px;
    .radioCombo {
      border: 1px solid #e0e0e0;
      height: 32px;
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;
      background-color: #ffffff;
      border-radius: 24px;
      color: ${(props) => props.theme.textdark};
      &.selected {
        border: 1px solid #663399;
        color: #663399 !important;
        font-weight: bold;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
      }
      .radioComboLabel {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        min-width: 32px;
        padding: 0 12px;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
      }
      .radioComboInput {
        position: absolute;
        opacity: 0;
        display: none;
        opacity: 0;
        width: 0;
        height: 0;
      }
    }
  }
`;
