import Link from "next/link";
import * as S from "./styles";

export function Menu() {
  return (
    <S.Menu>
      <S.MenuItem>
        <Link href="/">Início</Link>
      </S.MenuItem>
      <S.MenuItem>
        <Link href="/videos">Vídeos</Link>
      </S.MenuItem>
      <S.MenuItem>
        <Link href="/galeria">Galeria</Link>
      </S.MenuItem>
    </S.Menu>
  );
}
