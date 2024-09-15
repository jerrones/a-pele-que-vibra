import { formatTime } from "@/utils/formatTime";
import { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import { HiMiniPause, HiMiniPlay } from "react-icons/hi2";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play ou Pause o áudio
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Atualiza o tempo atual do áudio
  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Define a duração total do áudio
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Controla o progresso do áudio quando o usuário interage com a barra de progresso
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = (Number(e.target.value) / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Inicia o áudio automaticamente quando a página carrega
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);
      audioRef.current.addEventListener("loadedmetadata", onLoadedMetadata);

      // Tenta reproduzir o áudio automaticamente
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay bloqueado: interação necessária", error);
          });
      }
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener(
          "loadedmetadata",
          onLoadedMetadata
        );
      }
    };
  }, []);

  // Calcula o valor da barra de progresso
  const progressValue = duration ? (currentTime / duration) * 100 : 0;
  return (
    <S.PlayContainer>
      <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
        <source src="/catirina.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <S.PlayButton onClick={togglePlayPause}>
        {isPlaying ? <HiMiniPause /> : <HiMiniPlay />}
      </S.PlayButton>

      <S.ProgressBar
        type="range"
        min="0"
        max="100"
        value={progressValue}
        onChange={handleProgressChange}
      />

      <S.TimeText>
        {formatTime(currentTime)} / {formatTime(duration)}
      </S.TimeText>
    </S.PlayContainer>
  );
}
