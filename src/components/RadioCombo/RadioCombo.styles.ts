import styled from 'styled-components';
import { color, BackgroundProps, ColorProps } from 'styled-system';

interface IRadioComboProps extends BackgroundProps, ColorProps {
  backgroundColor?: any;
}

const RadioComboContainer = styled.div<IRadioComboProps>`
  display: flex;
  flex-direction: column;
  * {
    transition: 0.4s all;
    *:before,
    *:after {
      box-sizing: border-box;
    }
  }
  .productControlTitles {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.text};
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
        border: 1px solid;
        border-color: ${color};
        ${color};
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

RadioComboContainer.defaultProps = {
  color: 'primary',
};

export default RadioComboContainer;
