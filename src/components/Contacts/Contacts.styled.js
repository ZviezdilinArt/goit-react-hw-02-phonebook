import styled from 'styled-components';

export const List = styled.ul`
  /* padding: 0; */

  li {
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }
  & li:not(:last-child) {
    margin-bottom: 15px;
  }
  button {
    display: inline-block;
    padding: 5px 12px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: green;
    cursor: pointer;
    transition: 400ms linear;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 20px;

    &:hover {
     color: white;
    }
  }
`;