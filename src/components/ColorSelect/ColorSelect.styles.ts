import styled from 'styled-components';

export const ColorSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
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
    .colorRadio {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 4px;
      &.selected {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        border-radius: 24px;
      }
      .colorRadioLabel {
        cursor: pointer;
        margin-left: 8px;
        margin-right: 16px;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: ${(props) => props.theme.textdark};
      }
      .colorRadioHex {
        cursor: pointer;
        display: block;
        position: relative;
        width: 24px;
        height: 24px;
        border-radius: 24px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
      }
      .colorRadioInput {
        position: absolute;
        display: none;
        opacity: 0;
      }
    }
  }
`;
