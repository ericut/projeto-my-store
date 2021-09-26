import styled from 'styled-components';

export const UserBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInitial = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #663399;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 32px;
  font-weight: bold;
  margin-right: 6px;
  font-size: 16px;
`;

export const UserWelcome = styled.div`
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  cursor: pointer;
  height: 49px;
  .arrowDown {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: 0.4s all;
  }
  &:hover {
    .arrowDown {
      transform: translateY(2px);
    }
  }
`;
