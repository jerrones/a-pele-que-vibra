"use client";
import { Menu } from "@/components/Menu/Menu";
import * as S from "./styles";
import Image from "next/image";
import cazumba from "../../public/cazumba.png";
import aPeleQueVibra from "../../public/a-pele-que-vibra.png";
import galeria from "../../public/galeria.png";
import { AudioPlayer } from "@/components/AudioPlayer/AudioPlayer";
import Link from "next/link";

export default function Home() {
  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.MenuHeader>
            <Menu />
          </S.MenuHeader>
          <S.ImgContainer>
            <Image alt="Máscara de Cazumbá" src={cazumba} />
          </S.ImgContainer>
          <S.AudioContainer>
            <span>Papete - Catirina (Composição: Josias Sobrinho)</span>
            <AudioPlayer />
          </S.AudioContainer>
        </S.Header>
        <S.Content>
          <S.TopBar>
            <Image
              alt="Texto A Pele que Vibra"
              src={aPeleQueVibra}
              width={250}
              style={{ marginBottom: "6rem" }}
            />
            <S.MenuContent>
              <Menu />
            </S.MenuContent>
          </S.TopBar>
          <p>
            A difusão cultural exerce papel significativo na promoção da
            inclusão social, glferecendo acesso equitativo ao conhecimento, as
            artes e à diversidade que compõem as diversas manifestações
            culturais. Ao proporcionar a disseminação de informações
            relacionadas às experiências culturais, permitimos que diferentes
            grupos sociais participem ativamente da cultura de uma comunidade.
            Nesse contexto, o design emerge como uma ferramenta que pode, por
            meio de projetos de expografia virtual, promover a organização e
            apresentação de exposições em ambientes digitais. O design da
            expografia virtual contribui, portanto, em ações que buscam tornar a
            cultura mais acessível e inclusiva, ao criar ambientes online que
            sejam acolhedores e envolventes para diversos públicos, garantindo
            que as informações sejam apresentadas de maneira clara e acessível a
            todos, independentemente de sua origem social, idade ou habilidades
            digitais, fazendo o uso de interfaces intuitivas, recursos de
            acessibilidade e design responsivo para garantir que a experiência
            seja inclusiva para todos os usuários. Dessa forma, o design da
            expografia não apenas informa, mas também educa e sensibiliza,
            oferecendo uma experiência cultural enriquecedora para todos os
            participantes. Assim, o objetivo central deste artigo é apresentar
            como ocorreu o desenvolvimento de um projeto de design expográfico
            virtual centrado no saber-fazer dos mestres da cultura popular
            junina em São Luis, Maranhão. Nesse sentido, o trabalho incluirá uma
            análise detalhada da interseção entre Design, Cultura e Expografia,
            bem como a exposição das práticas de campo e projetuais, abrangendo
            desde a definição participativa dos critérios de conceito e
            narrativa da exposição até a produção e seleção do material
            audiovisual, o planejamento e a elaboração do projeto expográfico, e
            finalmente, a promoção e difusão da exposição sobre os mestres da
            cultura junina do bairro Madre Deus.
          </p>
        </S.Content>
        <S.Galery>
          <Link href="/galeria">
            <Image
              alt="Imagem com foto do cazumbá de fundo, moldura e chamada para conhecer a exposição
            "
              src={galeria}
            />
          </Link>
        </S.Galery>
      </S.Main>
      <S.Footer></S.Footer>
    </S.Container>
  );
}
