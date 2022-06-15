export default function useSqueak() {
  const audio = new Audio(require("../../../assets/duck-squeak.mp3"));
  audio.volume = 0.5;
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
