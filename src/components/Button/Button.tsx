import styled from 'styled-components';
import { color, BackgroundProps, ColorProps } from 'styled-system';

interface IButtonProps extends BackgroundProps, ColorProps {
  backgroundColor?: any;
}

const Button = styled.button<IButtonProps>`
  ${color};
  color: ${(props) => props.theme.colors.buttontext};
  font-weight: bold;
  min-width: 100px;
  height: 48px;
  padding: 12px 32px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.4s all;
  &:hover {
    opacity: 0.75;
  }
`;

export default Button;
