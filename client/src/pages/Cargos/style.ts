import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  ul {
    list-style: none;
    display: flex;
    width: 90%;
    margin: 30px auto;
    flex-wrap: wrap;
  }
  li {
    height: 200px;
    display: flex;
    flex-direction: column;
    width: 31%;
    min-width: 200px;
    margin: 20px auto;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #312e38;
    padding: 20px;
    text-align: center;
    div {
      button {
        cursor: pointer;
        border: none;
        background: transparent;
        margin-left: 10px;
      }
    }
  }
`;
