import Link from "next/link";
import * as S from "./styles";

export function Menu() {
  return (
    <S.Menu>
      <Link href="/">
        <S.MenuItem>Início</S.MenuItem>
      </Link>
      <Link href="/videos">
        <S.MenuItem>Vídeos</S.MenuItem>
      </Link>
      <Link href="/galeria">
        <S.MenuItem>Galeria</S.MenuItem>
      </Link>
    </S.Menu>
  );
}
