import styled from 'styled-components';

export const ColorModeSwitchContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  .colorModeSwitchButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 28px;
    border-radius: 50px;
    transition: 0.4s all;
    color: ${(props) => props.theme.text};
    &:hover {
      color: #ffffff;
      background-color: #663399;
    }
  }

  @media (max-width: 768px) {
    right: 120px;
    top: 24px;
  }
`;
