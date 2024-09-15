"use client";
import { Menu } from "@/components/Menu/Menu";
import * as S from "./styles";

export default function Videos() {
  return (
    <S.Container>
      <S.Header>
        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
      </S.Header>
      <S.VideoContainer>
        <iframe src={`https://www.youtube.com/embed/B8h6bc4IhwU`} />
      </S.VideoContainer>
      <S.VideoContainer>
        <iframe src={`https://www.youtube.com/embed/9SWC0gg8dUE`} />
      </S.VideoContainer>
      <S.VideoContainer>
        <iframe src={`https://www.youtube.com/embed/quFmd6vJkz8`} />
      </S.VideoContainer>
    </S.Container>
  );
}
