import styled from 'styled-components';

export const TabsContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const TabsHeader = styled.div`
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  gap: 32px;
`;

export const Tab: any = styled.button`
  width: 90px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-transform: uppercase;
  padding: 8px 0px 16px 0px;
  border: 0;
  border-bottom: 3px solid transparent;
  outline: 0;
  transition: 0.4s all;
  opacity: 0.8;
  ${({ active }: any) => active && `border-bottom: 3px solid #191919; opacity: 1; font-weight: bold;`}
`;

export const TabContent = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 160%;
  letter-spacing: 0.02em;
  padding: 24px 0;
  border-bottom: 1px solid #c4c4c4;
`;
