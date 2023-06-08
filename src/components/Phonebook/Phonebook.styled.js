import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30%;
`;



export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;

  input {
    min-height: 40px;
    padding: 0px 5px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: green;
  cursor: pointer;
  transition: 400ms linear;
  font-family: 'Roboto';
  font-weight: 600;
  margin-left: 480px;


  &:hover {
    color:white;
  }
`;