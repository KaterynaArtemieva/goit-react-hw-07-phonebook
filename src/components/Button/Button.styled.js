import styled from 'styled-components';

export const ButtonA = styled.button`
  margin: 0px auto;
  width: 200px;
  display: block;
  background: rgb(193, 214, 233);
  border: 1px solid rgb(193, 214, 233);
  cursor: pointer;
  color: rgb(124, 136, 148);
  border-radius: 6px;
  padding: 4px 16px;
  font-size: large;
  font-weight: 500;
  &:hover {
    background-color: rgb(252, 253, 255);
  }
`;

export const ButtonD = styled.button`
  margin: 0px;
  background: rgb(193, 214, 233);
  border: 1px solid rgb(193, 214, 233);
  cursor: pointer;
  color: rgb(124, 136, 148);
  border-radius: 6px;
  padding: 4px 16px;
  font-size: large;
  font-weight: 500;
  line-height: 0;
  &:hover {
    background-color: rgb(252, 253, 255);
  }
`;