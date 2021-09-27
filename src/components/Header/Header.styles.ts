import styled from 'styled-components';

export const HeaderContainer = styled.div`
  /* max-width: 100%; */
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Logo = styled.div`
  max-width: 100%;
  width: 176px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 276px;
  }
`;

export const LogoImg = styled.img`
  display: block;
  position: relative;
  @media (max-width: 768px) {
    width: 276px;
  }
`;

export const UserNavigation = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: flex-end;
    max-width: 100%;
    width: 100%;
  }
`;
