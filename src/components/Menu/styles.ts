import styled from "styled-components";

export const Menu = styled.div`
  width: 20%;
  height: 7vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MenuItem = styled.button`
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  text-align: center;
  font-weight: lighter;
  letter-spacing: 2px;
  color: #2b4fb8;
  background-color: #fff;
  width: 5.5rem;
  height: 1.4rem;
  padding: 0.25rem;
  border: none;
  cursor: pointer;

  &:hover {
    width: 6.5rem;
    height: 1.8rem;
    transition: 0.2s;
  }

  a {
    text-decoration: none;
  }
`;
