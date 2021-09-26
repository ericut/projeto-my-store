import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background: #191919;
  max-width: 100px;
  width: 100px;
  height: 40px;
  padding: 12px 24px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: 0.4s all;
  &:hover {
    opacity: 0.75;
  }
`;

export default Button;