import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/videos.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MenuContainer = styled.div`
  width: 5%;
`;

export const VideoContainer = styled.div`
  width: 100%;

  iframe {
    width: 100%;
    height: 45rem;

    @media (max-width: 600px) {
      height: 12rem;
    }
  }
`;
