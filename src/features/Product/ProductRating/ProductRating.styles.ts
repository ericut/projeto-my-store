import styled from 'styled-components';

export const ProductRatingContainer = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 7px;
  .stars {
    display: flex;
    gap: 1px;
  }
  .starButton {
    font-style: normal;
    font-weight: normal;
    padding: 0;
    height: 18px;
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: #ffa900;
    cursor: pointer;
  }
  .rating {
    font-size: 12px;
    text-decoration: underline;
  }
`;
