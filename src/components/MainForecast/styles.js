import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  width: 550px;
  margin: 0 auto;

  border-radius: 30px;
  box-shadow: 6px 10px 6px #bcbcbc;
  padding: 40px 0;

  margin-top: 50px;
  color: #136794;
`;

export const City = styled.h1``;

export const ForecastGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Temperature = styled.h1`
  font-size: 50px;
`;

export const Predict = styled.h3``;

export const MinMax = styled.h4`
  font-weight: 400;
`;
