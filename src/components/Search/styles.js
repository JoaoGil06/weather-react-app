import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 6.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 300px;
  z-index: 10;

  input {
    padding: 12px 10px;
    font-size: 16px;
    color: #0e323c;
    border-radius: 10px;
    background: #f5f6fa;
    width: 100%;
  }
`;
