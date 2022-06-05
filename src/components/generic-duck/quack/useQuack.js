export default function useQuack() {
  const audio = new Audio(require("../../../assets/Duck-quack.mp3"));
  audio.volume = 0.3;
  const quack = () => {
    audio.play();
  };
  const stopQuack = () => {
    audio.pause();
  };
  const canQuack = () => true;
  return {
    quack,
    stopQuack,
    canQuack,
  };
}
