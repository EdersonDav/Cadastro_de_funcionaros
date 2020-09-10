import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 30%;
  height: 200px;
  background: #fff;
  color: #312e38;
  margin: 20px 10px 0;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #312e38;
  div {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      background: #26ad92;
      padding: 5px;
      color: #fff;
      border-radius: 0 5px 5px 0;
    }
    div {
      margin-right: 10px;
      button {
        cursor: pointer;
        border: none;
        background: transparent;
        margin-left: 10px;
      }
    }
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    li {
      margin-top: 10px;
      span {
        color: #26ad92;
      }
    }
  }
`;
