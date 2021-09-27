import styled from 'styled-components';

const IconButton = styled.button`
  background: #e0e0e0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  transition: 0.4s all;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    color: #ffffff;
    background: #663399;
  }
`;

export default IconButton;
