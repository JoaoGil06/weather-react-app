import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  padding: 25px;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  color: #6dd5ed;
  font-size: 24px;
`;

export const Search = styled.input`
  min-width: 300px;
  background: #f5f6fa;
  padding: 12px 10px;
  font-size: 16px;
  color: #0e323c;
  border-radius: 10px;

  &::placeholder {
    color: #dbdbdb;
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
  cursor: pointer;
`;

export const NavElements = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavElement = styled.li`
  color: #0e323c;
  font-weight: 600;
  transform: opacity 0.2s;

  > a {
    text-decoration: none;
    color: inherit;
  }

  &:first-child {
    margin-right: 20px;
  }

  &:hover {
    color: #2193b0;
    opacity: 0.8;
  }
`;

export const Item = styled.a``;
