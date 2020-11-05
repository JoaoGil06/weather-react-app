import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  max-width: 750px;
  background-color: #fff;

  padding: 70px 80px;
  border-radius: 30px;
  box-shadow: 6px 10px 6px #a5a0a0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 45px;
  color: #6dd5ed;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  color: #707070;
  margin-bottom: 30px;
`;

export const InsertCity = styled.input`
  background: #f5f6fa;
  width: 100%;
  padding: 12px 10px;
  font-size: 16px;
  color: #0fa2a9;
  border-radius: 10px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;

  &::placeholder {
    color: #0fa2a9;
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #2193b0, #6dd5ed);
  color: #fff;
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
