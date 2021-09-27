import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  border-bottom: 1px solid;
  border-bottom-color: ${(props) => props.theme.inputborder};
  background: transparent;
  color: ${(props) => props.theme.text};
  &::placeholder {
    color: #5c5c5c;
  }
  &:focus,
  &:active {
    outline: none;
    border-bottom: 2px solid;
    border-bottom-color: ${(props) => props.theme.borders};
  }
`;

export default Input;
