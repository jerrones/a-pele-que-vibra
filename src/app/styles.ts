import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Main = styled.main`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 85vh;
  padding: 1rem 5rem;
  background-image: url("/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    padding: 1rem 2rem;
    height: 75vh;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    height: 42vh;
  }

  @media (min-width: 1000px) {
    height: 100vh;
  }
`;

export const MenuHeader = styled.div`
  width: 19.5rem;
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    width: 62rem;
    height: auto;

    @media (max-width: 1000px) {
      width: 50rem;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  &:hover {
    animation: shake 0.5s;
  }
`;

export const AudioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Content = styled.div`
  width: 100%;
  padding: 4rem 6rem;
  background-image: url("/background-2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  p {
    font-size: 1.5rem;
    color: #2b4fb8;
    font-weight: bold;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MenuContent = styled.div`
  width: 8%;
`;

export const Galery = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/background-3.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    width: 55rem;
    height: auto;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      width: 60rem;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100vh;
  background-image: url("/background-4.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
