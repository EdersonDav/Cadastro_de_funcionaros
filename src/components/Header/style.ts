import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.3);
  color: #312e38;
  border-radius: 8px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      display: flex;
      align-items: center;
      margin-left: 20px;
      background: #fff;
      padding: 5px;
      color: #312e38;
      border-radius: 50%;
      box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.3);
      &:hover {
        color: #b1c8c3;
      }
    }
  }
`;
