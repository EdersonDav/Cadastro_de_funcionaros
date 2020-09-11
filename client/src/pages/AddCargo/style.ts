import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 50px 0;
    background: #fff;
    height: 500px;
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    h1 {
      margin: 50px;
      margin-bottom: 0;
    }
    input {
      width: 80%;
      background: #fff;
      border-radius: 10px;
      border: 2px solid #312e38;
      padding: 16px;
      color: #312e38;
      display: flex;
      align-items: center;
      margin-top: 50px;
      & + div {
        margin-top: 50px;
      }
      &::placeholder {
        color: ${lighten(0.2, '#312e38')};
      }
    }
    div {
      display: flex;
      width: 80%;
      align-items: center;
      justify-content: space-between;
      button {
        height: 56px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        width: 40%;
        font-weight: 500;
        margin-top: 16px;
        color: #fff;
        transition: background-color 0.2s;
        font-size: 1.2rem;
        &[type='button'] {
          background: #ff0600;
          &:hover {
            background: ${shade(0.2, '#ff0600')};
          }
        }
        &[type='submit'] {
          background: #00ff60;
          &:hover {
            background: ${shade(0.2, '#00ff60')};
          }
        }
      }
    }
  }
`;