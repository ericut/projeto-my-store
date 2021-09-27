import styled from 'styled-components';

interface IButtonProps {
  primaryColor?: any;
  secondaryColor?: any;
}

const Button = styled.button<IButtonProps>`
  ${(props: any) =>
    props.primaryColor &&
    `
    color: ${props.theme.colors.buttontext};
    background-color: ${props.theme.colors.primary};
    font-weight: bold;
  `}
  ${(props: any) =>
    props.secondaryColor &&
    `
    color: ${props.theme.colors.buttontext};
    background-color: ${props.theme.colors.secondary};
  `}
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
