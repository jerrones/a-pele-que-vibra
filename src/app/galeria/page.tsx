"use client";
import { Menu } from "@/components/Menu/Menu";
import * as S from "./styles";
import Photos from "@/components/Photos/Photos";

export default function Galeria() {
  return (
    <S.Container>
      <S.Header>
        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
      </S.Header>
      <Photos />
    </S.Container>
  );
}
